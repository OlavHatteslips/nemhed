			var CSSTransitionGroup = React.addons.CSSTransitionGroup;
			var INTERVAL = 2000;

			
			
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
			
			  
			
			class NextStepNoSloganComponent extends React.Component{
				constructor (props){
					super(props);
					
				}
				countColumns(){
					alert("Optalt : 1 kolonne");
				}
				removeThisDiv(i){
					//console.log('You clicked: ' + this.state.items[i] );
					this.setState({ mountedInfo: false });
					this.setState({mounted: false});
					
					
				}
				render(){
					return(
						<div>
							<div className="alert alert-warning">Bem&aelig;rk; Du har ikke valgt et slogan</div>
							<button onClick={this.removeThisDiv.bind(this, "videoLink", this.state) } className="btn btn-xs btn-info"> Forts&aelig;t </button>
						</div>
					);
				}
			}
			
			class NextStepSloganComponent extends React.Component{
				
				constructor (props){
					super(props);
					this.state = {
						mounted : true
					}
				}
				countColumns(){
					//alert("Optalt : 2 kolonner");
				}
				
				removeThisDiv(i){
					//console.log('You clicked: ' + this.state.items[i] );
					this.setState({ mountedInfo: false });
				}

				handleChange(event) {
					this.setState({value: event.target.value.substr(0, 140)});
					//localStorage.setItem(2);
				}
				testChange(){
					return (
						<div>
							<h2>Local Storage Count: {localStorage.getItem("count") }</h2>
							<a href="#" onClick={this.removeThisDiv.bind(this, "videoLink", this.state) } target="_self" className="btn btn-xs btn-success"> Smugkig </a>
						
							<button onClick={this.handleChange.bind(this)} value="Easter Eag" className="btn btn-xs btn-success"> dssd </button>
						</div>
					);
				}
				
				handleChange(event) {
					this.setState({mounted: this.state.mounted = false});
				}
					
					

			


	
				
				
				render(){
					return(
						
						<div>
						{
							this.testChange()}
							
						
						</div>
					);
				}
			}
			
			
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
					<div className="container "    href="#" key={jumbotronTitle} onClick={this.handleRemove.bind(this, i)}>
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



class ContentComponent extends React.Component{
	constructor (props){
		super(props);
		this.state = {
			current: 0,
			colors: "red",
			interval: 0,
			teddybear: "testDiv",
			tick:0,
			items:["row","col-md-6","panel", "panel-body", "text-center", "iframe"],
			mounted: false,
			mountedInfo: false,
			videoLink: ['https://www.youtube.com/embed/v4oN4DuR7YU&amp;itag=43&amp;ipbits=0&amp;signature=D2BCBE2F115E68C5FF97673F1D797F3C3E3BFB99.59252109C7D2B995A8D51A461FF9A6264879948E&amp;sver=3&amp;ratebypass=yes&amp;expire=1300417200&amp;key=yt1&amp;ip=0.0.0.0&amp;id=37da319914f6616c'],
			value: "banner",
			bval : "logo",
			showNextQuestion : false,
			sloganQuestion : false,
			sloganText : '',
			showPreview: false
			
		}
		//var results = this.props.results;
	}
	componentDidMount() {
	 
	 
	  this.setState({ mounted: true });
	}
	

	
	handleAdd() {
		var newItems = this.state.videoLink.concat([prompt('Enter some text')]);
		this.setState({videoLink: newItems});
		
	}
	
	handleRemove(i) {
		var newItems = this.state.videoLink.slice();
		newItems.splice(i, 1);
		this.setState({videoLink: newItems});
	}
	
	removeThisDiv(){
		//console.log('You clicked: ' + this.state.items[i] );
		this.setState({ mounted: false });
	}
	
	basedOnSloganNo(){
		this.setState({ mounted: false });
			
	}
	basedOnSloganYes(){
	//	this.setState({ mounted: true });
		//this.setState({ sloganQuestion: false });
		this.setState({sloganQuestion : true});
	}
	
	bindPreview(){
	//	this.setState({ mounted: true });
		//this.setState({ sloganQuestion: false });
		this.setState({showPreview : true});
		
	}
	
	handleAddSloganText() {
		var newItems = this.state.sloganText.concat([prompt('Enter some text')]);
		this.setState({sloganText: newItems});
		
	}
	
	changeStateOfMount(){
		this.setState({
            mounted: false,
			showPreview: true
        });
	}
	previewFix(){
		
	//	this.setState({ mounted: true });
		//this.setState({ sloganQuestion: false });
		//this.setState({ mounted: false });
		return(
			<div id="rowID" className=" row" key={"row"} >
			
				<div  key={"colmd12"}  className="col-md-12 ">
				
					<div className="panel " key={"panel"}>
						<div className="panel-body"  id="panelVideoId" key={"panelVideoBody"} >
							<p className="text-center" key={"textCenter"}>
										
								<button className="btn btn-info" onClick={this.handleAddSloganText.bind(this)}>Indsæt Slogan</button>
								
								<h1>{this.state.sloganText}</h1>
								
							</p>
						</div>
					</div>
				</div>
				<div  key={"colmd12s"}  className="col-md-3 ">
				
					<div className="panel " key={"panel"}>
						<div className="panel-body"  id="panelVideoId" key={"panelVideoBody"} >
							<p className="text-center" key={"textCenter"}>
										
								Kasse eet
								
							</p>
						</div>
					</div>
				</div>
				<div  key={"colmd12v"}  className="col-md-3 ">
				
					<div className="panel " key={"panel"}>
						<div className="panel-body"  id="panelVideoId" key={"panelVideoBody"} >
							<p className="text-center" key={"textCenter"}>
										
							Kasse to
								
							</p>
						</div>
					</div>
				</div>
				<div  key={"colmd12fdf"}  className="col-md-3 ">
				
					<div className="panel " key={"panel"}>
						<div className="panel-body"  id="panelVideoId" key={"panelVideoBody"} >
							<p className="text-center" key={"textCenter"}>
										
								Kasse tre
								
							</p>
						</div>
					</div>
				</div>
				<div  key={"colmd12assa"}  className="col-md-3 ">
				
					<div className="panel " key={"panel"}>
						<div className="panel-body"  id="panelVideoId" key={"panelVideoBody"} >
							<p className="text-center" key={"textCenter"}>
										
								Kasse fire
								
							</p>
						</div>
					</div>
				</div>
			</div>	
		);
		
		
	}
	
	answerBasedOnSlogan(){
		return(
				
				<div className="">
				
					
					<button className="btn btn-xs btn-info" onClick={this.changeStateOfMount.bind(this)}>Vis Resultatet</button>
					
				</div>
				
				
			);
	}
	
	basedOnLogo(){
		
	
		return(
	
				<div className="">
					<h2>Har du et slogan <p className="small-caps small">{this.props.option} </p></h2>
					
					<form>
						<p className="form-group">

							<label className="radio-inline">
								<input type="radio" name="inlineRadioOptions" id="QuestionOneSloganYesId"  value="yes" onClick={this.basedOnSloganYes.bind(this)} /> Ja
							</label>
						</p>
						<p className="form-group">
							<label className="radio-inline">
								<input type="radio" name="inlineRadioOptions" id="QuestionOneSloganNoId"  value="no" onClick={this.basedOnSloganNo.bind(this)} /> Nej
							</label>
						</p>
					</form>
					{ this.state.sloganQuestion ? this.answerBasedOnSlogan(): null }
					
				
				</div>
			);
	}
	
	hideContentQuestionMenu(){
		this.setState({ mounted: false });
	}
	
	checkSetLogo() {
		
		this.setState({ showNextQuestion: true });
		//this.setState({value: this.state.value = 'Easter Eeg ;) '});
	}
	
	checkSetBanner() {
		this.setState({ showNextQuestion: false });
		console.log("not implemented yet");
		//this.setState({value: this.state.value = 'Easter Eeg ;) '});
	}
		
	render(){
		
		var x;
		/*<div  key={i}  onClick={this.removeThisDiv.bind(this, i, this.state) }>{item}</div>*/
		var b;
		
		var row;
		var infoRow;
		var {value} = this.state;
		

		if(this.state.mounted ){	
		
			
			row = 
			
			<div id="rowID" className=" " key={"row"} >
			<JumbotronComponent  />
				<div  key={"colmd6"}  className="col-md-6 ">
				
					<div className="panel " key={"panel"}>
						<div className="panel-body"  id="panelVideoId" key={"panelVideoBody"} >
							<p className="text-center" key={"textCenter"}>

									<video controls="controls" 
								   className="video-stream" 
								   x-webkit-airplay="allow" 
								   data-youtube-id="v4oN4DuR7YU" 
								   src={this.state.videoLink}>
								   </video>
							</p>
						</div>
					</div>
				</div>
				<div className="col-md-6" key={6}>
					<div className="panel " key={"videoLink"} >
							
							
						
							<h2>Har du et {this.props.children}</h2>
								<form>
								<p className="form-group">

									<label className="radio-inline">
										<input type="radio" name="inlineRadioOptions" id="QuestionOneLogo"  value={this.state.bval} onClick={this.checkSetLogo.bind(this)} /> Logo
									</label>
								</p>
								<p className="form-group">
									<label className="radio-inline">
										<input type="radio" name="inlineRadioOptions" id="QuestionOneBanner"   value={this.state.value}  onClick={this.checkSetBanner.bind(this)} /> Banner
									</label>
								</p>
								</form>
								
									//hvis den variabel er sat til...yes så vis logodimsen ellers lad være
								{ this.state.showNextQuestion ? this.basedOnLogo(): null }
								
					</div>
				</div>
			</div>
			
		}
		
			
		

		return (
		
				
					<CSSTransitionGroup
					  className=" "
					  transitionEnterTimeout={525}
					  transitionLeaveTimeout={525}
					  transitionName="example"
					  component="div"
					  >
			
						{row}
						
						{ this.state.showPreview ? this.previewFix(): null }
					</CSSTransitionGroup>
				
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
					<button className="btn btn-xs btn-info "> Made with {this.props.framework}</button>
					<button onClick={this.handleChange.bind(this)} value="Easter Eag" className="btn btn-xs btn-success "> {value} </button>

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

class HeaderLoadComponent extends  React.Component{
	
	constructor(props){
		super(props);
		this.state = {
			isShowing : false,
			hideMyDiv : "panelVideoId",
			sloganText : ""
		}
	}
	
	handleAddSloganText() {
		var newItems = this.state.sloganText.concat([prompt('Enter some text')]);
		this.setState({sloganText: newItems});
		
	}
    render() {
        return(
			<div id="rowID" className=" row" key={"row"} >
			
				<div  key={"colmd12"}  className="col-md-12 ">
				
					<div className="panel " key={"panel"}>
						<div className="panel-body"  id="panelVideoId" key={"panelVideoBody"} >
							<p className="text-center" key={"textCenter"}>
										
								<button className="btn btn-info" onClick={this.handleAddSloganText.bind(this)}>Indsæt Slogan</button>
								
								<h1>{this.state.sloganText}</h1>
								
							</p>
						</div>
					</div>
				</div>
				<div  key={"colmd12s"}  className="col-md-3 ">
				
					<div className="panel " key={"panel"}>
						<div className="panel-body"  id="panelVideoId" key={"panelVideoBody"} >
							<p className="text-center" key={"textCenter"}>
										
								Kasse eet
								
							</p>
						</div>
					</div>
				</div>
				<div  key={"colmd12v"}  className="col-md-3 ">
				
					<div className="panel " key={"panel"}>
						<div className="panel-body"  id="panelVideoId" key={"panelVideoBody"} >
							<p className="text-center" key={"textCenter"}>
										
							Kasse to
								
							</p>
						</div>
					</div>
				</div>
				<div  key={"colmd12fdf"}  className="col-md-3 ">
				
					<div className="panel " key={"panel"}>
						<div className="panel-body"  id="panelVideoId" key={"panelVideoBody"} >
							<p className="text-center" key={"textCenter"}>
										
								Kasse tre
								
							</p>
						</div>
					</div>
				</div>
				<div  key={"colmd12assa"}  className="col-md-3 ">
				
					<div className="panel " key={"panel"}>
						<div className="panel-body"  id="panelVideoId" key={"panelVideoBody"} >
							<p className="text-center" key={"textCenter"}>
										
								Kasse fire
								
							</p>
						</div>
					</div>
				</div>
			</div>	
		);
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

	
	/*ReactDOM.render(
		
			<JumbotronComponent  >
				 
			</JumbotronComponent>
		, 
		document.getElementById('jumbotronId')
	);*/
	
	ReactDOM.render(
		
			<ContentComponent  >
				  Logo eller banner
			</ContentComponent>
		, 
		document.getElementById('insertContentStuff')
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