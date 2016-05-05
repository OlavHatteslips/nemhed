			var CSSTransitionGroup = React.addons.CSSTransitionGroup;
			var INTERVAL = 2000;

			var QuestionOneComponent = React.createClass({
				getInitialState: function() {
					return {
						value: "banner",
						bval : "logo"
					};
				},
				basedOnBanner :function(){
					//alert("Du har et banner");
				},
				basedOnLogo : function(){
					
					//$("#panelbody").append("HEJ");
					
					// var reactfindDomNode = React.findDOMNode(this);
					
					//$(reactfindDomNode).append("<h2>Har du et slogan?</h2>");
					
			
					ReactDOM.render(
						<LogoComponent option="Logo" />,
						document.getElementById('logoOptionId')
					);
				
					
					
				},
				alertValue: function() {
					alert(this.state.value);
				}
				
				,
				render: function(){
					return(

						<div>
							<h2>Har du et {this.props.children}</h2>
							<form>
								<p className="form-group">

									<label className="radio-inline">
										<input type="radio" name="inlineRadioOptions" id="QuestionOneLogo"  value={this.state.bval} onClick={this.basedOnLogo} /> Logo
									</label>
								</p>
								<p className="form-group">
									<label className="radio-inline">
										<input type="radio" name="inlineRadioOptions" id="QuestionOneBanner"   value={this.state.value}  onClick={this.alertValue} /> Banner
									</label>
								</p>

							</form>
						</div>
					);
				}
			});
			
			
			
			var LogoComponent = React.createClass({
				basedOnSloganNo : function(){
					ReactDOM.render(
						<NextStepNoSloganComponent option="Logo" />,
						document.getElementById('forwardDivID')
					);
				},
				basedOnSloganYes : function(){
					this.setState({
						count: this.state.count + 1
					});
					localStorage.setItem("count", this.state.count);
					ReactDOM.render(
						<NextStepSloganComponent option="Logo" />,
						document.getElementById('forwardDivID')
					);
				},
				getInitialState: function(){
					return {
						count: 0
					}
				},
				render: function(){
					return(
						<div>
							<h2>Har du et slogan <p className="small-caps small">{this.props.option} </p></h2>
							<form>
							<h1>Count: {this.state.count}</h1>
								<p className="form-group">

									<label className="radio-inline">
										<input type="radio" name="inlineRadioOptions" id="QuestionOneSloganYesId"  value="yes" onClick={this.basedOnSloganYes} /> Ja
									</label>
								</p>
								<p className="form-group">
									<label className="radio-inline">
										<input type="radio" name="inlineRadioOptions" id="QuestionOneSloganNoId"  value="no" onClick={this.basedOnSloganNo} /> Nej
									</label>
								</p>

							</form>
						</div>
					);
				}
			});
			
			  
			
			
			
			
			var NextStepNoSloganComponent = React.createClass({
				countColumns : function(){
					alert("Optalt : 1 kolonne");
				},
				render: function(){
					return(
						<div>
							<div className="alert alert-warning">Bem&aelig;rk; Du har ikke valgt et slogan</div>
							<button onClick={this.countColumns} className="btn btn-xs btn-success"> Forts&aelig;t </button>
						</div>
					);
				}
			});
			
			var NextStepSloganComponent = React.createClass({
				countColumns : function(){
					//alert("Optalt : 2 kolonner");
				},
				getInitialState: function() {
					return {
						url : "Generated.html"
					};
				},
				handleChange: function(event) {
					this.setState({value: event.target.value.substr(0, 140)});
					//localStorage.setItem(2);
				},
				testChange : function(){
					
					$("#pagebodylayout").slideUp("slow");
				},
				render: function(){
					return(
						/*<div>
							<div className="alert alert-success">Bem&aelig;rk; Du har  valgt et slogan</div>
							<a href="#" onClick={this.handleChange} className="btn btn-xs btn-success"> Forts&aelig;t </a>
							<a href={ this.state.url} target="_blank" className="btn btn-xs btn-success"> Smugkig </a>
							*/
						/*
							<ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={1500} transitionLeaveTimeout={1300}>
							<div><a href={ this.state.url} target="_blank" className="btn btn-xs btn-success"> Smugkig </a></div>
							</ReactCSSTransitionGroup>*/
							
						<div>
							<h2>Local Storage Count: {localStorage.getItem("count") }</h2>
							<a href="#" onClick={this.testChange.bind(this)} target="_self" className="btn btn-xs btn-success"> Smugkig </a>
						</div>
					/*	</div>*/
					);
				}
			});
			
			
/*
			var FooterComponent = React.createClass({
				getInitialState: function() {
					return {value: 'Powered by Bootstrap'};
				},
				handleChange: function(event) {
					this.setState({value: event.target.value});
				},
				render: function(){
					return(
						<div>
							<button className="btn btn-xs btn-info"> Made with {this.props.framework}</button>
							<button onClick={this.handleChange} value="Easter Eag" className="btn btn-xs btn-success"> {this.state.value} </button>
						</div>
					);
				}
			});
			
		*/
	
	
			 
			ReactDOM.render(
				<div>
					<QuestionOneComponent id='questionOne' >
						 logo eller et banner?
					</QuestionOneComponent>
				</div>, 
				document.getElementById('panelbody')
			);
			

class MenuComponent extends React.Component{
	constructor (props){
		super(props);
		this.state = {
			current: 0,
			colors: "red",
			interval: 0,
			tick:0,
			items:[],
			children: ['Forside','Hvorfor?','Hvem er vi?', 'Opret Din Side'],
			mounted: false
		}
	}
	componentDidMount() {
	  this.state.interval = setInterval(this.state.tick, INTERVAL);
	 
	  this.setState({ mounted: true });
	}
	componentWillUnmount() {
		
		clearInterval(this.interval);
	}
	tick() {
		this.setState({current: this.state.current + 1});
	}
	
	handleAdd() {
		var newItems = this.state.items.concat([prompt('Enter some text')]);
		this.setState({items: newItems});
		
	}
	
	handleRemove(i) {
		var newItems = this.state.children.slice();
		newItems.splice(i, 1);
		this.setState({children: newItems});
	}
  
	render(){
		var children = [];
		var pos = 0;
		var colors = ['red', 'gray', 'blue'];
		var style = {
		  left: pos * 128,
		  padding:"0.5rem",
		  margin: "5px",
		  background: colors[1]
		};
		/*
			children.push(
			<nav className="blog-nav"  key={pos}  >
				<a className="blog-nav-item active" style={style} href="#">Forside</a>
				<a className="blog-nav-item" href="#">Hvorfor?</a>
				<a className="blog-nav-item" href="#">Hvem er vi?</a>
				<a className="blog-nav-item" href="#">Opret Din Side</a>
			
			</nav>);*/
			
		
			var items = this.state.items.map(function(item, i) {
				return (
					<a className="blog-nav-item active"   href="#" key={item} onClick={this.handleRemove.bind(this, i)}>
						{item}
					</a>
				);
			}.bind(this));	
		
		/*
		 for (var i = this.state.current; i < this.state.current + colors.length; i++) {
			var style = {
			  left: pos * 5,
			  background: colors[i % colors.length]
			};
			pos++;
			children.push(<a className="blog-nav-item active"   href="#"  onClick={this.handleRemove.bind(this, i)} key={i}  onClick={this.handleRemove.bind(this, i)} style={style}>{i}</a>);
		}
		*/
		
		var x;
		
		if(this.state.mounted ){	
			x = this.state.children.map(function(child, i) {
				return (
					<a className="blog-nav-item active"    href="#" key={child} onClick={this.handleRemove.bind(this, i)}>
						{child}
					</a>
				);
			}.bind(this));
		}
	/* <button className="btn btn-info" onClick={this.handleAdd.bind(this)}>Tilføj Menu</button>*/
		return (
		
				<div>
					
					
					<CSSTransitionGroup
					  className="animateExample blog-nav"
					  transitionEnterTimeout={250}
					  transitionLeaveTimeout={250}
					  transitionName="example"
					  component="nav"
					  >
					
						
						{x}
							
						
						
					</CSSTransitionGroup>
					
				</div>
			);
	}
}


class JumbotronComponent extends React.Component{
	constructor (props){
		super(props);
		this.state = {
			current: 0,
			colors: "red",
			interval: 0,
			tick:0,
			items:[],
			mounted: false,
			jumbotronTitle: ['Vælg et logo eller banner?']
		}
	}
	componentDidMount() {
	  this.state.interval = setInterval(this.state.tick, INTERVAL);
	 
	  this.setState({ mounted: true });
	}
	componentWillUnmount() {
		
		clearInterval(this.interval);
	}
	
	handleAdd() {
		var newItems = this.state.jumbotronTitle.concat([prompt('Enter some text')]);
		this.setState({jumbotronTitle: newItems});
		
	}
	
	handleRemove(i) {
		var newItems = this.state.jumbotronTitle.slice();
		newItems.splice(i, 1);
		this.setState({jumbotronTitle: newItems});
	}
  
	render(){
	
		var pos = 0;
		var colors = ['red', 'gray', 'blue'];
		var style = {
		  left: pos * 128,
		  padding:"0.5rem",
		  margin: "5px",
		  background: colors[1]
		};

	
		
		var x;
		
		if(this.state.mounted ){	
			x = this.state.jumbotronTitle.map(function(jumbotronTitle, i) {
				return (
					<div className="container"    href="#" key={jumbotronTitle} onClick={this.handleRemove.bind(this, i)}>
							<h1>
								{jumbotronTitle}
							</h1>
							<p>
								S&aring;dan g&oslash;r du...blablabla
							</p>
					</div>
				);
			}.bind(this));
		}

		return (
		
				<div>
					<CSSTransitionGroup
					  className=" jumbotron jumbotroncolors"
					  transitionEnterTimeout={250}
					  transitionLeaveTimeout={250}
					  transitionName="example"
					  component="div"
					  >
						{x}
					</CSSTransitionGroup>
				</div>
			);
	}
}




class FooterComponent extends
	React.Component{
		constructor(props){
			super(props);
			this.state = {
				value : 'Powered by Bootstrap 2016'
			}
		}
		render(){
			var {value} = this.state;
			
			return(
				<div>
					<button className="btn btn-xs btn-info"> Made with {this.props.framework}</button>
					<button onClick={this.handleChange.bind(this)} value="Easter Eag" className="btn btn-xs btn-success"> {value} </button>

				</div>
			);
		}


		handleChange(event) {
			this.setState({value: this.state.value = 'Easter Eeg ;) '});
		}

	}



	

class AnimateComponent extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			isShowing : false,
			hideMyDiv : "panelVideoId"
		}
	}
	
	onClicked() {
		 this.setState({isShowing: !this.state.isShowing});
    }

	render(){
	//	var helloWorld = this.state.isShowing ? <Hello name="World!"  onComplete={this.onAnimationComplete}  /> : '';
		var myDiv = 
				<div onClick={this.onClicked.bind(this)} >
				<nav className="blog-nav " >
					<ul className="nav nav-pills ">
						<li role="presentation" className="active"><a href="#"  onClick={this.onClicked.bind(this)}  >Luk Vindue</a></li>
					</ul>
				</nav>
				</div>
		return (
					/*<div ref="myHelloWorld">
					
 						<nav className="blog-nav " >
		                  
		                    <ul className="nav nav-pills ">
		                        <li role="presentation" className="active"><a href="#"  onClick={this.onClicked.bind(this)}  >Luk Vindue</a></li>
		                    </ul>
               			 </nav>
					

					</div>
					*/
					<div  >
					{myDiv}
					
					
					 { this.state.isShowing ? <Hello name="Peter" />: null }
					</div>
			);
	}
}


class Hello extends  React.Component{
    render() {
        return <div>Hello { this.props.name }</div>;
    }
};	

	ReactDOM.render(
		<div  >
			<AnimateComponent  >
				 
			</AnimateComponent>
		</div>, 
		document.getElementById('panelVideoId')
	);
	
	ReactDOM.render(
		
			<MenuComponent  >
				 
			</MenuComponent>
		, 
		document.getElementById('menuId')
	);

	
	ReactDOM.render(
		
			<JumbotronComponent  >
				 
			</JumbotronComponent>
		, 
		document.getElementById('jumbotronId')
	);

	ReactDOM.render(
		<div>
			<FooterComponent framework="ReactJS" copyright="2016" >
				 Powered by Bootstrap
			</FooterComponent>
		</div>, 
		document.getElementById('footer')
	);






//ECMAScript6 måden...
/*class Profile extends 
  React.Component{
    constructor(props){
      super(props);
      this.state = {
        height: 100
      };
    }
    render(){
      //detruction..pulls props from props
      pull out all values
     var { name, age, bio, pic } = this.props;
      var {height} = this.state;
      return (
        <div className="profile-box">
          <h2>Name:{name}</h2>
          <h2>Age:{age}</h2>
          <h2>Bio: {bio}</h2>
          <img src={pic} height={height}/>
          <button onClick={ this.ZoomPicIn.bind(this) }>Zoom Out</button>
          <button onClick={ this.ZoomPicOut.bind(this) }>Zoom In</button>
        </div>
      );
    }
    ZoomPicIn(){
      this.setState({height: this.state.height + 20});
    }
    ZoomPicOut(){
       this.setState({height: this.state.height - 20});
    }
}*/


// state
// den kigger på om der sker noget med komponenten. Hvis den gør, så genindlæses det.

//ReactDOM.render(<Profile name="Tim" age={24} bio="I like puppies" pic="http://coolwildlife.com/wp-content/uploads/galleries/post-3004/Fox%20Picture%20003.jpg" />, document.getElementById("panelbody"));