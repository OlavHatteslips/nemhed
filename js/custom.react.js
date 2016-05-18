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
				 <li class="active">
				<a className="blog-nav-item active"    href="#" key={child} onClick={this.handleRemove.bind(this, i)}>
						{child}
						
						
					</a>
					</li>
				);
			}.bind(this));
		}
	/* <button className="btn btn-info" onClick={this.handleAdd.bind(this)}>Tilføj Menu</button>*/
		return (
		
				<div className="blog-masthead" >
					
					
					<CSSTransitionGroup
					  className="header  headercolor blog-nav   navbar-inverse  navbar  navbar-fixed-top "
					  id="header"
					  transitionEnterTimeout={125}
					  transitionLeaveTimeout={125}
					  transitionName=""
					  transitionAppear={true}
					  transitionAppearTimeout={125}
					  component="nav"
					  >
						<div className="container">
							<div className="navbar-header">

								<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>                        
								</button>
								<a className="navbar-brand" href="#">Nemhed.dk</a>
							</div>
							
					
							<div class="collapse navbar-collapse" id="myNavbar">


 
								<ul className="nav navbar-nav">
									{x}
								</ul>
								<ul className="nav navbar-nav navbar-right">
									<li  role="presentation" className="active" ><a href="#"> Opret Bruger</a></li>
									<li><a href="#">Login</a></li>
								</ul>
							</div>
					</div>	
						
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
								S&aring;dan g&oslash;r du...
							</p>
					</div>
				);
			}.bind(this));
		}

		return (
		
				<div>
					<CSSTransitionGroup
					  className=" jumbotron jumbotroncolors  text-center"
					  transitionEnterTimeout={150}
					  transitionLeaveTimeout={150}
					  transitionAppear={true}
					  transitionAppearTimeout = {150}
					  transitionName="example"
					  component="div"
					  >
						{x}
					</CSSTransitionGroup>
				</div>
			);
	}
}


class JumbotronMenuComponent extends React.Component{
	constructor (props){
		super(props);
		this.state = {
			current: 0,
			colors: "red",
			interval: 0,
			tick:0,
			items:[],
			mounted: false,
			jumbotronTitle: ['Hvor vil du have placeret din menu?']
			
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
								S&aring;dan g&oslash;r du...
							</p>
					</div>
				);
			}.bind(this));
		}

		return (
		
				<div>
					<CSSTransitionGroup
					  className=" jumbotron jumbotroncolors  text-center"
					  transitionEnterTimeout={150}
					  transitionLeaveTimeout={150}
					  transitionAppear={true}
					  transitionAppearTimeout = {150}
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
			videoLink: ['https://www.youtube.com/embed/9gTw2EDkaDQ?html5=1'],
			value: "banner",
			bval : "logo",
			showNextQuestion : false,
			sloganQuestion : false,
			sloganText : '',
			showPreview: false,
			logoUrl : '',
			mountedFrontpage : false,
			jumbotronWelcomeTitle : 'Velkommen til Nemsiden',
			startSetup: false,
			logoBannerSelected : false,
			alertLogoImageCopyright : false,
			createMenu : false,
			menuSelected : 0
			
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
	
	handleAddLogoUrl() {
		var newItems = this.state.logoUrl.concat([prompt('Enter some text')]);
		this.setState({logoUrl: newItems,
		 alertLogoImageCopyright: true
		});
		
	}
	GoToLogoBannerChoice(){
		this.setState({
			logoBannerSelected : false,
			 mounted: true,
			 showPreview: false,
			 sloganQuestion : false,
			 showNextQuestion : false
		})
		
	}
	
	AlertCopyright(){
		
		return(
		<div class="alert alert-danger alert-dismissible fade in" role="alert"> 
			<button type="button" className="close" data-dismiss="alert" aria-label="Close">
			<span aria-hidden="true">×</span></button> 
			<h4>Copyright</h4> 
			<p>
				Hej - Vi skal g&oslash; opmærksom på, at det er strengt ulovligt, at benytte eller uploade billeder som man ikke har tilladelse til at bruge. Copyright! Denne side fraskriver sig hermed et hvert (med)ansvar for brugen af andres værker.
			</p>
			<blockquote>
				<a href="http://kum.dk/kulturpolitik/ophavsret/billedkunst-og-fotografier/" alt="copyright paa billeder">Link</a>
			</blockquote>
			<p> 
				<button type="button" className="btn btn-danger">
					Forstået
				</button> 
			</p> 
		</div>
		);
	}
	
	showMenu(){
		
		return(
			<div className="alert alert-danger alert-dismissible fade in" role="alert"> 
				show something
			</div>
		);
	}
	
	GoToFrontpage(){
		this.setState({ startSetup: false });
		
	}
	
	GoToCreateMenu(){
		this.setState({ createMenu : true});
	}
	
	menuChoice(choice_param){
		this.setState({menuSelected: choice_param});
	}
	
	insertMenuQuestions(){
		return(
		
					<div id="rowID" className=" " key={"rowMenu"} >
			
				<JumbotronMenuComponent  />
				<div  key={"colmdMenu6"}  className="col-md-6 ">
				
					<div className="panel " key={"panel"}>
						<div className="panel-body"  id="panelVideoId" key={"panelVideoBodyMenu"} >
							<p className="text-center" key={"textCenterMenu"}>
								
								<iframe src={this.state.videoLink}></iframe>
									
							</p>
						</div>
					</div>
				</div>
				<div className="col-md-6" key={7}>
					<div className="panel " key={"videoLinkMenu"} >
							
							
						
							<h2>Hvor vil du have din <p className="small-caps small"> Menu </p> placeret?</h2>
				
							<form>
								<p className="form-group">

									<label className="radio-inline">
										<input type="radio" name="inlineRadioOptions" id="QuestionTwoMenuOverHeader"  value="1" onClick={this.menuChoice.bind(this, 1)}  /> Over Logo Headeren
									</label>
								</p>
								<p className="form-group">
									<label className="radio-inline">
										<input type="radio" name="inlineRadioOptions" id="QuestionTwoMenuRight"  value="2" onClick={this.menuChoice.bind(this, 2)} /> I højre side af headeren
									</label>
								</p>
								<p className="form-group">
									<label className="radio-inline">
										<input type="radio" name="inlineRadioOptions" id="QuestionTwoMenuUnderHeader"  value="3" onClick={this.menuChoice.bind(this, 3)} /> Under headeren
									</label>
								</p>
							</form>
								
					</div>
				</div>
				{ this.state.menuSelected ? this.previewFix(): null }
			</div>
			
		
			
		);
	}
	
	changeStateOfMount(){
		this.setState({
            mounted: false,
			showPreview: true,
			logoBannerSelected: true
        });
	}
	previewFix(){
		
	//	this.setState({ mounted: true });
		//this.setState({ sloganQuestion: false });
		//this.setState({ mounted: false });
		
		var contentPreview;
		var menuObject;
		if(this.state.logoBannerSelected == true && this.state.createMenu == false)
		{
			contentPreview = <div> 
			<div id="rowID" className=" row" key={"row"} >
				<div className="container">
					<div  key={"colmdLogo"}  className="col-md-3 ">
					
						<div className="panel " key={"panel"}>
							<div className="panel-body text-center"  id="panelVideoId" key={"panelVideoBody"} >
							
											
									<button className="btn btn-info" onClick={this.handleAddLogoUrl.bind(this)}>Indsæt Logo</button>
									
									<img className="img img-responsive img-thumbnail" src={this.state.logoUrl} alt={this.state.logoUrl} />
									
								   
							</div>
						</div>
					</div>
					<div  key={"colmdSlogan"}  className="col-md-9 ">
					
						<div className="panel " key={"panel"}>
							<div className="panel-body text-center"  id="panelVideoId" key={"panelVideoBody"} >
								
											
									<button className="btn btn-info" onClick={this.handleAddSloganText.bind(this)}>Indsæt Slogan</button>
									
									<h1>{this.state.sloganText}</h1>
									
								
							</div>
						</div>
					</div>
				</div>
			</div>
			<div id="rowContentD" className=" row" key={"row2Content"} >
				<div className="container">

					<div className="col-md-12" key={"backBtnPreview"}>

						<ul className="pager">
							<li className="previous"><a href="#" onClick={this.GoToLogoBannerChoice.bind(this)}>Tilbage til valg af logo eller banner</a></li>
					
						
							<li className="next">
								<a href="#" onClick={this.GoToFrontpage.bind(this)}>Tilbage til forsiden</a>
							</li>
							
							<li className="next">
								<a href="#" onClick={this.GoToCreateMenu.bind(this)}>Skab Menu</a>
							</li>
							
						</ul>
					</div>
					 { this.state.alertLogoImageCopyright ? this.AlertCopyright(): null }
				</div>
				
			</div>	
			
		</div>
		
		}
		
		if(this.state.createMenu )
		{
			contentPreview = 
			
				<div id="rowID" className=" row" key={"rowMenuShow"} >
					<div className="container">
					
					<div  key={"colmdMyPersonalMenuShow"}  className="col-md-12 ">
						<nav className="navbar navbar-default navbar-static-top">
							<div className="navbar-header">

								<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>                        
								</button>
								<a className="navbar-brand" href="#">Menu </a>
							</div>
							
					
							<div class="collapse navbar-collapse" id="myNavbar">


 
								<ul className="nav navbar-nav">
									<li ><a href="#" className="btn btn-info" onClick="alert('hej');">indsæt Links</a></li>
								</ul>
							</div>
						</nav>
					</div>
					
					
						<div  key={"colmdMenuShow"}  className="col-md-3 ">
						
							<div className="panel " key={"panel"}>
								<div className="panel-body text-center"  id="panelVideoId" key={"panelMenuBody"} >
								
												
										<button className="btn btn-info" onClick={this.handleAddLogoUrl.bind(this)}>Indsæt Logo</button>
										
										<img className="img img-responsive img-thumbnail" src={this.state.logoUrl} alt={this.state.logoUrl} />
										
									   
								</div>
							</div>
						</div>
						<div  key={"colmdSlogan"}  className="col-md-9 ">
						
							<div className="panel " key={"panel"}>
								<div className="panel-body text-center"  id="panelVideoId" key={"panelVideoBody"} >
									
												
										<button className="btn btn-info" onClick={this.handleAddSloganText.bind(this)}>Indsæt Slogan</button>
										
										<h1>{this.state.sloganText}</h1>
										
									
								</div>
							</div>
						</div>
					</div>
				</div>
		
		}
		
		
		
		return(
		
				<div>
		
					<CSSTransitionGroup
					  className=""
					  transitionEnterTimeout={525}
					  transitionLeaveTimeout={525}
					  transitionName="example"
					  transitionAppear={false}
					  transitionAppearTimeout={1500}
					  component="div"
					  >
						{contentPreview}
							{menuObject}
					
					</CSSTransitionGroup>
					
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
		
		//this.setState({value: this.state.value = 'Easter Eeg ;) '});
	}
	
	runSetup() {
		this.setState({ startSetup: true });
	
		//this.setState({value: this.state.value = 'Easter Eeg ;) '});
	}
	

		
	render(){
		
		var x;
		/*<div  key={i}  onClick={this.removeThisDiv.bind(this, i, this.state) }>{item}</div>*/
		var b;
		
		var row;
		var infoRow;
		var {value} = this.state;
		var rowSetup;

		if(this.state.mounted ){	
		
			if(this.state.startSetup == false ){
				rowSetup = 
				
				<div id="rowID" className=" " key={"rowForStart"} >
				<div  key={"colmd12Welcome"}  className="col-md-12 ">
					
						
							
							<div className=" jumbotron jumbotroncolors  text-center">
							
								<h1>{this.state.jumbotronWelcomeTitle}</h1>
								<p >
								
									Nemhed.dk er en udstrækt hånd til dig der gerne vil skabe din helt egen, unikke hjemmeside, men ikke har nogen erfaring med html-koder. Du vil blive guidet gennem alle trin. Og skulle det ikke være nok, kan du også få hjælp fra vores hjælpevideoer.
								</p>
							</div>
							

				
				</div>
			
		
				<div  key={"colmd6bob"}  className="col-md-4 ">
				
					<div className="panel effect2" key={"panelbob"}>
						<div className="panel-body text-center"  id="panelVideoId" key={"panelVideoBodyBob"} >
						
								
								<h2>Hvorfor?</h2>
								<p>
									<img className="img img-responsive  img-circle" src="img/question-1332062.png" alt="why"/>
								</p>	
							
						</div>
					</div>
				</div>
				<div className="col-md-4" key={63}>
					<div className="panel effect2 text-center" key={"videoLink"} >
							
							
					
							<h2>Hvem er vi?</h2>
							<p>
								<img className="img img-responsive  img-circle" src="img/question-1332054.png" alt="why"/>
							</p>
							
					</div>
				</div>
				
				<div className="col-md-4" key={"Left"}>
					<a href="#OpretSide" onClick={this.runSetup.bind(this)} >
						<div className="panel effect2 text-center " key={"videoLink"} >
								
								
							
								<h2>Opret Din Side</h2>
								<p>
									<img className="img img-responsive   img-circle" src="img/blank-1217348_1920.jpg" alt="why"/>
								</p>
									
						</div>
					</a>
				</div>
			</div>
				
				
				
			}
			
		if(this.state.startSetup == true && this.state.logoBannerSelected == false){
			
			
				//$("#header").attr({"class":"header  headercolor blog-nav   navbar-inverse  navbar  navbar-fixed-top animated bounceOutUp"});		
				//$("div#menuId").attr({"class":"animated  bounceOutUp"});	
				//$("div#blog-masthead").delay(300).slideUp(500);				
			
					
			row = 
			
			
				
			<div id="rowID" className=" " key={"row"} >
			
				<JumbotronComponent  />
				<div  key={"colmd6"}  className="col-md-6 ">
				
					<div className="panel " key={"panel"}>
						<div className="panel-body"  id="panelVideoId" key={"panelVideoBody"} >
							<p className="text-center" key={"textCenter"}>
								
								<iframe src={this.state.videoLink}></iframe>
									
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
								
								
								{ this.state.showNextQuestion ? this.basedOnLogo(): null }
								
					</div>
				</div>
				
				<div className="col-md-12" key={"backBtn"}>

					<ul className="pager">
						<li className="previous"><a href="#" onClick={this.GoToFrontpage.bind(this)}>Tilbage til forsiden</a></li>
					
					</ul>
				</div>
			</div>
		
		
		}}
			
		

		return (
	
					<CSSTransitionGroup
					  className=""
					  transitionEnterTimeout={225}
					  transitionLeaveTimeout={225}
					  transitionName=""
					  transitionAppear={true}
					  transitionAppearTimeout={200}
					  component="div"
					  >
						{rowSetup}
						{row}
						
						{ 
						this.state.showPreview ? this.previewFix(): null 
						
						}
						{
							this.state.createMenu ? this.insertMenuQuestions(): null 
						}
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
					<button  className="btn btn-xs btn-info "> Made with {this.props.framework}</button>
					<button onClick={this.handleChange.bind(this)} value="Beaver got money!" className="btn btn-xs btn-success "> {value} </button>

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
		var content;
		content = <div id="rowID" className=" row" key={"row"} >
			
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
										
								Kasse firevcv
								
							</p>
						</div>
					</div>
				</div>
				
				
			</div>	
		
		
		
        return(
		
					<CSSTransitionGroup
					  className="animated rotateInDownRight"
					  transitionEnterTimeout={525}
					  transitionLeaveTimeout={525}
					  transitionName="example"
					  transitionAppear={false}
					  transitionAppearTimeout={500}
					  component="div"
					  >
						{content}
						
					
					</CSSTransitionGroup>
					
			
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