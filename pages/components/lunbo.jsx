// var style = require('./lunbo.less');
// var ReactDOM = require('react-dom');
// var React = require('react');
// var data = require('../../static/data.json');

import style from "./lunbo.less"
import ReactDOM from "react-dom"
import React from "react"
import data from "../../static/data.json"


var LunBoControl = React.createClass({
    /*对出入的props进行验证*/
    propsTypes : {
        defaultActiveIndex:React.PropTypes.number,
        interval:React.PropTypes.number,
        direction:React.PropTypes.oneOf['right','left','top','bottom'],
        number:React.PropTypes.number,
        boxStyle:React.PropTypes.string,
        imgWidth:React.PropTypes.number.isRequired,
        imgHeight:React.PropTypes.number.isRequired
    },
    /*设置默认的props值*/
    getDefaultProps: function(){
        return {
            direction:'right',
            interval: 1000,
            boxStyle:'content'
        };
    },
    /*初始化state值*/
    getInitialState : function(){
        return{
            activeIndex:1,
            offsetDistance:this.props.direction == 'right' || this.props.direction == 'left' ? -this.props.imgWidth : -this.props.imgHeight,
            pause:false,
            flag:true
        };
    },
    /*生命周期函数 在首次渲染之前*/
    componentWillMount : function(){
        this.direction = this.props.direction === 'left' || this.props.direction === 'right'? 'x' : 'y';
    },
    /*在真实的DOM被渲染出来后*/
    componentDidMount : function(){
        this.autoPlay();
    },
    /*组件被移除之前*/
    componentWillUnmount : function(){
        clearTimeout(this.timeOuter);
        clearInterval(this.timer);
    },
    autoPlay : function(){
        switch(this.props.direction){
        case 'right' : 
            this.timerOuter=setTimeout(this.playRight,this.props.interval);
            this.direction='x';
            break;
        case 'left'  : 
            this.timerOuter=setTimeout(this.playLeft,this.props.interval);
            this.direction='x';
            break;
        case 'top'   : 
            this.timerOuter=setTimeout(this.playLeft,this.props.interval);
            this.direction='y';
            break;
        case 'bottom': 
            this.timerOuter=setTimeout(this.playRight,this.props.interval);
            this.direction='y';
            break;
        };
    },
    /*对不同方向做的相应模板上样式的处理*/
    directionHandle : function(){
        if(this.direction === 'y'){
            return {top : this.state.offsetDistance+'px',width : this.props.imgWidth,height : this.props.imgHeight*(this.props.number+2)};
        }else {
            return {left : this.state.offsetDistance+'px',width : this.props.imgWidth*(this.props.number+2),height : this.props.imgHeight};
        }
    },
    /*鼠标滑入，滑出*/
    mouseHandle : function(e){
        if(e.type === 'mouseover'){
            this.setState({pause : true});
        }else if(e.type === 'mouseleave'){
            this.setState({pause : false});
            this.autoPlay();
        }
    },
    /*圆点显示效果*/
    checkDots : function(index){
        var activeIndex;
        if(this.state.activeIndex === this.props.number+1){
            activeIndex = 1;
        }else if(this.state.activeIndex === 0){
            activeIndex = this.props.number;
        }else {
            activeIndex = this.state.activeIndex;
        }
        return index+1 === activeIndex? 'dots active' : 'dots';
    },
    /*鼠标滑入圆点*/
    dotsHover : function(index){
        clearInterval(this.timer);
        this.setState({activeIndex:index+1});
        this.position();
    },
    /*向右或向下*/
    playRight: function(indexIn){
        if(this.state.flag){
            var index=indexIn?indexIn:this.state.activeIndex+1;
            this.setState({activeIndex:index});
            this.position();
        }
    },
    /*向左或向上*/
    playLeft: function(indexIn){
        if(this.state.flag){
            var index=indexIn?indexIn:this.state.activeIndex-1;
            this.setState({activeIndex:index});
            this.position();
        }
    },
    /*运动效果*/
    position: function(){
        this.setState({flag:false});
        this.timer = setInterval(function(){
            if(this.direction === 'x'){
                var boxDistance = this.props.imgWidth;
            }else {
                var boxDistance = this.props.imgHeight;
            }
            var offsetDistance = this.state.offsetDistance;
            if(Math.abs(offsetDistance-(-boxDistance*this.state.activeIndex)) <= 0.09){
                offsetDistance = -boxDistance*this.state.activeIndex;
                clearInterval(this.timer);
                this.setState({flag:true});
                if(this.state.activeIndex > this.props.number){
                    offsetDistance = -boxDistance;
                    this.setState({activeIndex : 1});
                }else if(this.state.activeIndex === 0){
                    offsetDistance = -boxDistance*this.props.number;
                    this.setState({activeIndex : this.props.number});
                }
                this.setState({offsetDistance:offsetDistance});
                if(!this.state.pause){
                    this.autoPlay();
                }
            }else{
                offsetDistance = offsetDistance-(boxDistance*this.state.activeIndex-Math.abs(offsetDistance))/30;
                this.setState({offsetDistance:offsetDistance});
            }
        }.bind(this),10);
    },
    /*点击向左按钮*/
    left: function(){
        var oldIndex=this.state.activeIndex;
        this.playLeft(oldIndex-1);
    },
    /*点击向右按钮*/
    right: function(){
        var oldIndex=this.state.activeIndex;
        this.playRight(oldIndex+1);
    },
    render : function(){
        var _this = this;
        return (<div className={this.props.boxStyle} style={{width:this.props.imgWidth, height:this.props.imgHeight}} onMouseOver={this.mouseHandle} onMouseLeave={this.mouseHandle}>
            <span className="leftIcon" onClick={this.left}></span>
            <span className="rightIcon" onClick={this.right}></span>
            <div className="dots-wrap">
                {   
                    React.Children.map(this.props.children,function(elem,index){
                        return (<span className={_this.checkDots(index)} onMouseOver={_this.dotsHover.bind(_this,index)}></span>);
                    })
                }
            </div>
            <ul style={this.directionHandle()}>
                {this.props.children[this.props.number-1]}
                {this.props.children}
                {this.props.children[0]}
            </ul>
        </div>);
    }
});
var LunBoComponent = React.createClass({
    propsTypes : {
        lunboObject : React.PropTypes.object.isRequired,
        imgArray : React.PropTypes.array.isRequired,
        linkArray : React.PropTypes.array
    },
    render : function(){
        return (
                <LunBoControl interval={this.props.lunboObject.interval} number={this.props.lunboObject.number} boxStyle={this.props.lunboObject.boxStyle} imgWidth={this.props.lunboObject.imgWidth} imgHeight={this.props.lunboObject.imgHeight} direction={this.props.lunboObject.direction}>
                    {    
                        this.props.imgArray.map(function(item,index){
                            return <li key={index}><a href={this.props.linkArray[index]}><img width={this.props.lunboObject.imgWidth} height={this.props.lunboObject.imgHeight} src={item}/></a></li>;
                        }.bind(this))
                    }
                </LunBoControl>
        );
    }
});

export default LunBoComponent;
