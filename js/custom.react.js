			var CSSTransitionGroup = React.addons.CSSTransitionGroup;
			var INTERVAL = 2000;

			var Flux = new McFly();
		
	
	

			

class MenuComponent extends React.Component{
	constructor (props){
		super(props);
		this.state = {
			current: 0,
			colors: "red",
			interval: 0,
			tick:0,
			items:[],
			children: ['Forside','Hvorfor?','Hvem er vi?', 'Opret din side'],
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
			x = <MyLinks  />
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
								<h2>nemhed.dk</h2>
							</div>
							
						
							<div class="collapse navbar-collapse" id="myNavbar">

								{x}
							
							</div>
					</div>

					<div className="row">
					  <div className="col-xs-3 col-md-1">
							<div className="panel-photo">
								<a  href="index.html">
									<img src="./img/logo/logo.png" className=" img img-responsive " alt="logo"/>
								</a>
							</div>	
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
					<div className="container-fluid "    href="#" key={jumbotronTitle} onClick={this.handleRemove.bind(this, i)}>
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
			jumbotronWelcomeTitle : 'Velkommen til Nemhed.dk',
			startSetup: false,
			logoBannerSelected : false,
			bannerMounted: false,
			alertLogoImageCopyright : false,
			createMenu : false,
			createBannerMenu : false,
			menuSelected : 0,
			menuBannerSelected : 0,
			displayBannerImgBtn: true,
			downloadLink: '',
			menuItem: []
			
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
		var newItems = this.state.logoUrl.concat([prompt('Skriv addressen til et billed')]);
		this.setState({logoUrl: newItems,
			alertLogoImageCopyright: true,
			displayBannerImgBtn: false
		});
		
		
	}
	

	
	addMenuArea(){
		
		var menuItems = this.state.menuItem.concat([prompt('Indtast Menupunkt')]);
		this.setState({menuItem: menuItems});

	}
	
	removeImageWarning(){
		
		this.setState({alertLogoImageCopyright : false});

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
	
	downloadHTML(htmlArgs){
		var fileName =  'dinhjemmeside.html'; // You can use the .txt extension if you want
		var elHtml = document.getElementById("insertContentStuff").innerHTML;
		var link = document.createElement('a');
		var mimeType;
		mimeType = mimeType || 'text/html';

		link.setAttribute('download', fileName);
		link.setAttribute('href', 'data:' + mimeType  +  ';charset=utf-8,' + encodeURIComponent(elHtml));
		link.click(); 
		
		this.setState ({downloadLink: link});
		
	}
	
	showDownloadLink(){
		return (
				<p>
					{this.state.downloadLink}
				</p>
		);
	}
	
	AlertCopyright(){
		
		return(
		<div  key={"colmdOptionsShowCopy"}  className=" col-md-12  col-sm-12   sidebar-optionpanel  ">
			<div className="alert alert-danger alert-dismissible fade in" role="alert"> 
				<button type="button" className="close" data-dismiss="alert" aria-label="Close">
				<span aria-hidden="true">×</span></button> 
				<h4>Copyright</h4> 
				<p>
					Hej - Vi skal g&oslash;re opmærksom på, at det er strengt ulovligt, at benytte eller uploade billeder som man ikke har tilladelse til at bruge. Copyright! Denne side fraskriver sig hermed et hvert (med)ansvar for brugen af andres værker.
				</p>
				<blockquote>
					<a href="http://kum.dk/kulturpolitik/ophavsret/billedkunst-og-fotografier/" alt="copyright paa billeder">Link</a>
				</blockquote>
				<p> 
					<button type="button" onClick={this.removeImageWarning.bind(this)} className="btn btn-danger">
						Forstået
					</button> 
				</p> 
			</div>
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
		this.setState({ showPreview: false});
		
	}
	
	GoToCreateBannerMenu(){
		
		
		this.setState({ createBannerMenu : true});
		this.setState({ showPreview: false});
		this.setState({ bannerMounted : false});
	}
	
	GoToMenuChoice(){
		this.setState({ createMenu : false});
		this.setState({ showPreview: true});
		this.setState({menuSelected: 0});
	}
	
	menuChoice(choice_param){
		this.setState({ createMenu : false});
		this.setState({menuSelected: choice_param});
		this.setState({ showPreview : true});
	}
	
	
	GoToMenuBannerChoice(){
		this.setState({ createBannerMenu : false});
		this.setState({ showPreview: true});
		this.setState({menuBannerSelected: 0});
		
	}
	
	menuBannerChoice(choice_param){
		this.setState({ createBannerMenu : false});
		this.setState({ menuBannerSelected: choice_param});
		this.setState({ showPreview : true});
		this.setState({ bannerMounted : true});
	}
	
	insertMenuQuestions(){
		
		var progressStyle = {
		  width: '10%'
		};
		
		return(
		
		
				<div id="rowID" className=" " key={"rowMenu"} >
					
					<progessBar progText={"Hej"} width={ 10 }/ >;
					
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
							
							
						
							<h2>Hvor vil du have din menu-linje placeret?</h2>
				
							<form>
								<p className="form-group">

									<label className="radio-inline">
										<input type="radio" name="inlineRadioOptions" id="QuestionTwoMenuOverHeader"  value="1" onClick={this.menuChoice.bind(this, 1)}  /> Over Logo'et
									</label>
								</p>
								<p className="form-group">
									<label className="radio-inline">
										<input type="radio" name="inlineRadioOptions" id="QuestionTwoMenuRight"  value="2" onClick={this.menuChoice.bind(this, 2)} /> I højre side af siden
									</label>
								</p>
								<p className="form-group">
									<label className="radio-inline">
										<input type="radio" name="inlineRadioOptions" id="QuestionTwoMenuUnderHeader"  value="3" onClick={this.menuChoice.bind(this, 3)} /> Under logo'et
									</label>
								</p>
							</form>
								
					</div>
				</div>
				{ this.state.menuSelected ? this.previewFix(): null }
				
		
			</div>
			
		
			
		);
	}
	
	
	insertBannerMenuQuestions(){
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
							
							
						
							<h2>Hvor vil du have din Menu placeret? dfdf</h2>
				
							<form>
								<p className="form-group">

									<label className="radio-inline">
										<input type="radio" name="inlineRadioOptions" id="QuestionTwoMenuOverHeader"  value="1" onClick={this.menuBannerChoice.bind(this, 1)}  /> Over Logo'et
									</label>
								</p>
								<p className="form-group">
									<label className="radio-inline">
										<input type="radio" name="inlineRadioOptions" id="QuestionTwoMenuRight"  value="2" onClick={this.menuBannerChoice.bind(this, 2)} /> I højre side af siden
									</label>
								</p>
								<p className="form-group">
									<label className="radio-inline">
										<input type="radio" name="inlineRadioOptions" id="QuestionTwoMenuUnderHeader"  value="3" onClick={this.menuBannerChoice.bind(this, 3)} /> Under logo'et
									</label>
								</p>
								
							</form>
								
					</div>
				</div>
				
				{ this.state.menuBannerSelected ? this.previewFix(): null }
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
		
		var contentPreview;
		var menuObject;
		var menuLinks;
		
		var menuLinksHorizontal;
		
		var progressStyle = {
		  width: '60%'
		};
		
		menuLinks = this.state.menuItem.map(function(item, i) {
			return (
				<li className="active">
					<a className=" "  href="#" key={item} >
						{item}
					</a>
				</li>
			);
		}.bind(this));
		
		menuLinksHorizontal = this.state.menuItem.map(function(item, i) {
			return (
			
				<div>
					<div className="col-md-3" key={item}>
					  <ul className="nav nav-pills nav-stacked" key={item}>
						<li className="active"><a href="#">{item}</a></li>
					  </ul>
					</div>
		
				</div>
				
					
			);
		}.bind(this));
		
			
		if(this.state.logoBannerSelected == true && this.state.menuSelected == 0)
		{
			
			contentPreview = <div> 
			

			
			<div id="rowID" className=" row" key={"rowMenuShow"} >
					

			
					<div className="container-fluid">
					
						<ProgBar progText="" width={ 0}/>
					
					
						<div  key={"colmdMenuShow"}  className=" col-md-12  col-sm-12   sidebar-left  ">
						

						
							
									<div    className=" col-sm-3 col-md-3   ">
										<div className="panel " key={"panel"}>
											<div className="panel-body text-center"  id="panelVideoId" key={"panelMenuBody"} >
												<button className="btn btn-info" onClick={this.handleAddLogoUrl.bind(this)}>Indsæt Logo</button>
												<img className="img img-responsive img-thumbnail" src={this.state.logoUrl} alt={this.state.logoUrl} />
											</div>
										</div>
									</div>
									<div    className=" col-sm-9 col-md-9   ">									
										<div className="panel " key={"panelTwo"}>
											<div className="panel-body text-center"  id="panelVideoId" key={"panelVideoBody"} >
												<button className="btn btn-info" onClick={this.handleAddSloganText.bind(this)}>Indsæt Slogan</button>
												<h1>{this.state.sloganText}</h1>
											</div>
										</div>									
									</div>
							
							
							
							
							
								<div className="container">		
									<div  className="col-sm-12 col-md-12  ">								
									<h1 className="page-header">Dit Indhold</h1>
									
									<div className="row placeholders">
										<div className="col-xs-6 col-sm-4 placeholder">
											<img src="http://a.bimg.dk/node-images/423/6/620x/6423014-google-m-ikke-forbinde-prsidentfrue-med-prostitution.jpg" className="img-responsive" alt="Generic placeholder thumbnail" height="200" width="200"/>
											<h4>Label</h4>
											<span className="text-muted">Something</span>
										</div>
										<div className="col-xs-6 col-sm-4 placeholder">
											<img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" className="img-responsive" alt="Generic placeholder thumbnail" height="200" width="200"/>
											<h4>Label</h4>
											<span className="text-muted">Something </span>
										</div>
										<div className="col-xs-6 col-sm-4 placeholder">
											<img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" className="img-responsive" alt="Generic placeholder thumbnail" height="200" width="200"/>
											<h4>Label</h4>
											<span className="text-muted">Something </span>
										</div>
									</div>
							
									</div>
								
								</div>
						

					

								</div>
						</div>
				</div>
				
				
		
				
					<div  key={"colmdOptionsShow"}  className=" col-md-12  col-sm-12   sidebar-optionpanel  ">
						<a href="#" className="btn btn-default" onClick={this.GoToLogoBannerChoice.bind(this)}>Tilbage til valg af logo eller banner</a>

						<a href="#" className="btn btn-default disabled" disabled="disabled" onClick={this.GoToFrontpage.bind(this)}>Tilbage til forsiden</a>

						<a href="#" className="btn btn-success" onClick={this.GoToCreateMenu.bind(this)}>Placer En Menu</a>
							
						

					</div>
					
				
					{ this.state.alertLogoImageCopyright ? this.AlertCopyright(): null }
					
			
			
		</div>
		
		}
		else if(this.state.menuSelected == 1 && this.state.logoBannerSelected == true  )
		{
		
			contentPreview = 
		
			
				<div id="rowID" className=" row" key={"rowMenuShow"} >
					<div className="container-fluid">
					
					
							<ProgBar progText="Menu 1 Valgt" width={ '95' }/>
					
							<div    className=" col-md-12  col-sm-12  sidebar-left  ">
					

				
					
								
									<nav className="navbar navbar-usermenu navbar-static-top">
										<div className="navbar-header">

											<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
												<span className="icon-bar"></span>
												<span className="icon-bar"></span>
												<span className="icon-bar"></span>                        
											</button>
											
										</div>
										
								
										<div className="collapse navbar-collapse" id="myNavbar">


											<a href="#" className="btn btn-info" onClick={this.addMenuArea.bind(this)} >Indsæt Menupunkt</a>
											<nav className="navbar navbar-default">
												<div className="container-fluid">
													<div className="navbar-header">
														<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
															<ol  className="breadcrumb">
																{menuLinks}
															</ol>
														</div>
													</div>
												</div>
											</nav>
										</div>
									</nav>
							
								
							</div>
					
						<div  key={"colmdMenuShow"}  className=" col-md-12  col-sm-12   sidebar-left  ">
						

						
									<div    className=" col-sm-3 col-md-3   ">
										<div className="panel " key={"panel"}>
											<div className="panel-body text-center"  id="panelVideoId" key={"panelMenuBody"} >
												<button className="btn btn-info" onClick={this.handleAddLogoUrl.bind(this)}>Indsæt Logo</button>
												<img className="img img-responsive img-thumbnail" src={this.state.logoUrl} alt={this.state.logoUrl} />
											</div>
										</div>
									</div>
									<div    className=" col-sm-9 col-md-9   ">									
										<div className="panel " key={"panelTwo"}>
											<div className="panel-body text-center"  id="panelVideoId" key={"panelVideoBody"} >
												<button className="btn btn-info" onClick={this.handleAddSloganText.bind(this)}>Indsæt Slogan</button>
												<h1>{this.state.sloganText}</h1>
											</div>
										</div>									
									</div>
							
									<div  className="col-sm-12 col-md-12  ">								
									<h1 className="page-header">Dit Indhold</h1>
									
									<div className="row placeholders">
										<div className="col-xs-6 col-sm-4 placeholder">
											<img src="http://a.bimg.dk/node-images/423/6/620x/6423014-google-m-ikke-forbinde-prsidentfrue-med-prostitution.jpg" className="img-responsive" alt="Generic placeholder thumbnail" height="200" width="200"/>
											<h4>Label</h4>
											<span className="text-muted">Something</span>
										</div>
										<div className="col-xs-6 col-sm-4 placeholder">
											<img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" className="img-responsive" alt="Generic placeholder thumbnail" height="200" width="200"/>
											<h4>Label</h4>
											<span className="text-muted">Something </span>
										</div>
										<div className="col-xs-6 col-sm-4 placeholder">
											<img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" className="img-responsive" alt="Generic placeholder thumbnail" height="200" width="200"/>
											<h4>Label</h4>
											<span className="text-muted">Something test </span>
										</div>
									</div>
							
									</div>
								
							

						</div>
				
						<div  key={"colmdOptionsShow"}  className=" col-md-12  col-sm-12   sidebar-optionpanel  ">
							<a href="#" className="btn btn-danger" onClick={this.GoToMenuChoice.bind(this)}>Tilbage til valg af menu</a>
							<a href="#" className="btn btn-success" onClick={this.downloadHTML.bind(this)}>Eksporter hjemmesiden</a>

						</div>
						
						
							{ this.state.alertLogoImageCopyright ? this.AlertCopyright(): null }
						
				
				</div>
				
				</div>
			
				
				
		
		}else if(this.state.menuSelected == 2 && this.state.menuBannerSelected == null )
		{
			
		
				
			contentPreview = 
			<div>
				<div id="rowID" className=" row" key={"rowMenuShow"} >
					<div className="container">
					
					
					
					
						<div  key={"colmdMenuShow"}  className=" col-md-12  col-sm-12   sidebar-left  ">
						

							<div  className="col-sm-9 col-md-9  ">
								
									
									
									<div    className=" col-sm-3 col-md-3   ">
										<div className="panel " key={"panel"}>
											<div className="panel-body text-center"  id="panelVideoId" key={"panelMenuBody"} >
												<button className="btn btn-info" onClick={this.handleAddLogoUrl.bind(this)}>Indsæt Logo</button>
												<img className="img img-responsive img-thumbnail" src={this.state.logoUrl} alt={this.state.logoUrl} />
											</div>
										</div>
									</div>
									<div    className=" col-sm-9 col-md-9   ">									
										<div className="panel " key={"panelTwo"}>
											<div className="panel-body text-center"  id="panelVideoId" key={"panelVideoBody"} >
												<button className="btn btn-info" onClick={this.handleAddSloganText.bind(this)}>Indsæt Slogan</button>
												<h1>{this.state.sloganText}</h1>
											</div>
										</div>									
									</div>
							
								
									<div  className="col-sm-12 col-md-12  ">								
										<h1 className="page-header">Dit Indhold</h1>
										
										<div className="row placeholders">
											<div className="col-xs-6 col-sm-4 placeholder">
												<img src="http://a.bimg.dk/node-images/423/6/620x/6423014-google-m-ikke-forbinde-prsidentfrue-med-prostitution.jpg" className="img-responsive" alt="Generic placeholder thumbnail" height="200" width="200"/>
												<h4>Label</h4>
												<span className="text-muted">Something</span>
											</div>
											<div className="col-xs-6 col-sm-4 placeholder">
												<img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" className="img-responsive" alt="Generic placeholder thumbnail" height="200" width="200"/>
												<h4>Label</h4>
												<span className="text-muted">Something </span>
											</div>
											<div className="col-xs-6 col-sm-4 placeholder">
												<img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" className="img-responsive" alt="Generic placeholder thumbnail" height="200" width="200"/>
												<h4>Label</h4>
												<span className="text-muted">Somethingdssdsd </span>
											</div>
										</div>
							
									</div>
								
								</div>
							
<div    className=" col-md-3  col-sm-3  sidebar-right   ">
					
								<div   className="col-sm-12 col-md-12 sidebar panel panel-body text-center">
							
											<nav className="navbar navbar-default navbar-static-top">
												<div className="navbar-header">

													<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
														<span className="icon-bar"></span>
														<span className="icon-bar"></span>
														<span className="icon-bar"></span>                        
													</button>
													
												</div>
												
										
												<div class="collapse navbar-collapse" id="myNavbar">


					 
													
													<a href="#" className="btn btn-info" onClick={this.addMenuArea.bind(this)} >Indsæt Menupunkt</a>
														
												
													{menuLinksHorizontal}
													
												</div>
											</nav>
										
								</div>
								
							</div>
							
						</div>

						
					</div>
				</div>
						<div  key={"colmdOptionsShow"}  className=" col-md-12  col-sm-12   sidebar-optionpanel  ">
									
												
												
												<a href="#" className="btn btn-danger" onClick={this.GoToMenuChoice.bind(this)}>Tilbage til valg af menu</a>
												<a href="#" className="btn btn-success" onClick={this.GoToCreateMenu.bind(this)}>Eksporter hjemmesiden</a>

								
											</div>
											
				
									
								
		</div>
		}
		
		
		
		return(
		
				<div>
		
					<CSSTransitionGroup
					  className=""
					  transitionEnterTimeout={225}
					  transitionLeaveTimeout={225}
					  transitionName="example"
					  transitionAppear={false}
					  transitionAppearTimeout={200}
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
	
	basedOnBanner(){
	
		var contentPreview;
		var menuObject;
		var menuLinks;
		
		var menuLinksHorizontal;
		
		menuLinks = this.state.menuItem.map(function(item, i) {
			return (
			
			
				<li className="">
					<a className=" "  href={item} key={item} >
						{item}
					</a>
				</li>
			);
		}.bind(this));
		
		menuLinksHorizontal = this.state.menuItem.map(function(item, i) {
			return (
			
				
					<div>
						<ul className="nav nav-pills nav-stacked" key={item}>
							<li className="active"><a href={item}>{item}</a></li>
						</ul>

						<div class="clearfix visible-lg"></div>
					</div>
			);
		}.bind(this));
		
			
		if(this.state.bannerMounted)
		{
			
			var divStyle = {
			  color: 'white',
			  backgroundSize: '100%',
			  
			  backgroundImage: 'url(' + this.state.logoUrl + ')',
			  WebkitTransition: 'all', // note the capital 'W' here
			  msTransition: 'all' // 'ms' is the only lowercase vendor prefix
			};
			
			var divImage;
			
	
			
			if(this.state.displayBannerImgBtn ){
				
							divImage = 		
							  
								<div  style={divStyle}   className="    ">			
									<button className="btn btn-info" onClick={this.handleAddLogoUrl.bind(this)}>Indsæt Banner</button>
									<img className="img img-responsive" src={this.state.logoUrl} alt={this.state.logoUrl} />								
								</div>
			}else{
					divImage = 		
							  
								<div  style={divStyle}   className="   ">			
									
									<img className="img img-responsive" src={this.state.logoUrl} alt={this.state.logoUrl} />								
								</div>
			}
			
			
			if(this.state.displayBannerImgBtn && this.state.menuBannerSelected == 0){
				
				contentPreview = <div> 
					<div className="container-fluid">
						<div id="rowID" className=" row" key={"rowMenuShow"} >
						
						<div  key={"colmdOptionsShow"}  className=" col-md-12    ">
							<ProgBar progText="Vaelg Menu " width={ 50 }/>
								<div  key={"colmdMenuShow"}  className=" col-sm-12 col-md-12  sidebar-left  ">
											{divImage}
							
											<h1 className="page-header">Dit Indhold</h1>
											
											<div className="row placeholders">
												<div className="col-xs-6 col-sm-4 placeholder">
													<img src="http://a.bimg.dk/node-images/423/6/620x/6423014-google-m-ikke-forbinde-prsidentfrue-med-prostitution.jpg" className="img-responsive" alt="Generic placeholder thumbnail" height="200" width="200"/>
													<h4>Label</h4>
													<span className="text-muted">Something</span>
												</div>
												<div className="col-xs-6 col-sm-4 placeholder">
													<img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" className="img-responsive" alt="Generic placeholder thumbnail" height="200" width="200"/>
													<h4>Label</h4>
													<span className="text-muted">Something </span>
												</div>
												<div className="col-xs-6 col-sm-4 placeholder">
													<img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" className="img-responsive" alt="Generic placeholder thumbnail" height="200" width="200"/>
													<h4>Label</h4>
													<span className="text-muted">Something </span>
												</div>
											</div>

										</div>
											<div  key={"colmdOptionsShow"}  className=" col-md-12  col-sm-12   sidebar-optionpanel  ">
									
												
												<a href="#" className="btn btn-default" onClick={this.GoToLogoBannerChoice.bind(this)}>Tilbage til valg af logo eller banner</a>
										
												<a href="#" className="btn btn-default" onClick={this.GoToCreateBannerMenu.bind(this)}>Placer En Menu</a>
										
											
												<a href="#" className="btn btn-default disabled" disabled="disabled" onClick={this.GoToFrontpage.bind(this)}>Tilbage til forsiden</a>
											

								
											</div>
								</div>
						
					</div>

				</div>	
				
			</div>
			}else if(this.state.menuBannerSelected == 1 ) 
			{
				
				contentPreview = <div> 
				
				<div id="rowID" className=" container-fluid" key={"rowMenuShow"} >
						<div className="row">
						
						<ProgBar progText="Menulinje Valgt" width={ 90 }/>
							<div    className=" col-md-12  col-sm-12  sidebar-left  ">

								
									<nav className="navbar navbar-usermenu navbar-static-top">
										<div className="navbar-header">

											<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
												<span className="icon-bar"></span>
												<span className="icon-bar"></span>
												<span className="icon-bar"></span>                        
											</button>
											
										</div>
										
								
										<div className="collapse navbar-collapse" id="myNavbar">


											<a href="#" className="btn btn-info" onClick={this.addMenuArea.bind(this)} >Indsæt Menupunkt</a>
											<nav className="navbar navbar-default">
												<div className="container-fluid">
													<div className="navbar-header">
														<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
															<ol  className="breadcrumb">
																{menuLinks}
															</ol>
														</div>
													</div>
												</div>
											</nav>
										</div>
									</nav>
							
								
							</div>

							<div  key={"colmdMenuShow"}  className=" col-md-12  col-sm-12   sidebar-left  ">
	
											{divImage}

									<div className="container">		
										<div  className="col-sm-12 col-md-12  ">								
										<h1 className="page-header">Dit Indhold</h1>
										
										<div className="row placeholders">
											<div className="col-xs-6 col-sm-4 placeholder">
												<img src="http://a.bimg.dk/node-images/423/6/620x/6423014-google-m-ikke-forbinde-prsidentfrue-med-prostitution.jpg" className="img-responsive" alt="Generic placeholder thumbnail" height="200" width="200"/>
												<h4>Label</h4>
												<span className="text-muted">Something</span>
											</div>
											<div className="col-xs-6 col-sm-4 placeholder">
												<img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" className="img-responsive" alt="Generic placeholder thumbnail" height="200" width="200"/>
												<h4>Label</h4>
												<span className="text-muted">Something </span>
											</div>
											<div className="col-xs-6 col-sm-4 placeholder">
												<img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" className="img-responsive" alt="Generic placeholder thumbnail" height="200" width="200"/>
												<h4>Label</h4>
												<span className="text-muted">Something </span>
											</div>
										</div>
								
										</div>
									
									</div>
									</div>
							
					

					
						
						
								<div  key={"colmdOptionsShow"}  className=" col-md-12  col-sm-12   sidebar-optionpanel  ">
									<a href="#" className="btn btn-danger" onClick={this.GoToMenuChoice.bind(this)}>Tilbage til valg af menu</a>
									<a href="#" className="btn btn-success" onClick={this.downloadHTML.bind(this, contentPreview)}>Eksporter hjemmesiden</a>
									{ this.state.downloadLink ? this.showDownloadLink(): null }
								</div>
						
						
								{ this.state.alertLogoImageCopyright ? this.AlertCopyright(): null }
					</div>
				</div>	
				
			</div>
				
					
					
			}else if(this.state.menuBannerSelected == 2 ) 
			{
				
				contentPreview = 
			<div>
				<div id="rowID" className=" container-fluid" key={"rowMenuShow"} >
					<div className="row">
					
							<ProgBar progText="Menulinje Valgt" width={ 90 }/>
						
					
							<div  key={"colmdMenuShow"}  className=" col-md-12  col-sm-12   sidebar-left  ">
						

								<div  className="col-sm-9 col-md-9  ">
									
										
										
										{divImage}
								
									
										<div  className="col-sm-12 col-md-12  ">								
											<h1 className="page-header">Dit Indhold</h1>
											
											<div className="row placeholders">
												<div className="col-xs-6 col-sm-4 placeholder">
													<img src="http://a.bimg.dk/node-images/423/6/620x/6423014-google-m-ikke-forbinde-prsidentfrue-med-prostitution.jpg" className="img-responsive" alt="Generic placeholder thumbnail" height="200" width="200"/>
													<h4>Label</h4>
													<span className="text-muted">Something</span>
												</div>
												<div className="col-xs-6 col-sm-4 placeholder">
													<img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" className="img-responsive" alt="Generic placeholder thumbnail" height="200" width="200"/>
													<h4>Label</h4>
													<span className="text-muted">Something </span>
												</div>
												<div className="col-xs-6 col-sm-4 placeholder">
													<img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" className="img-responsive" alt="Generic placeholder thumbnail" height="200" width="200"/>
													<h4>Label</h4>
													<span className="text-muted">Something </span>
												</div>
											</div>
								
										</div>
									
									</div>
								
									<div    className=" col-md-3  col-sm-3  sidebar-right   ">
						
										<div   className="col-sm-12 col-md-12 sidebar text-center">
								
												
													
											
												


						 
														
														<a href="#" className="btn btn-info" onClick={this.addMenuArea.bind(this)} >Indsæt Menupunkt</a>
															
													
														{menuLinksHorizontal}
														
													
												
											
										</div>
									
								</div>
							
						
							</div>
								<div  key={"colmdOptionsShow"}  className=" col-md-12  col-sm-12   sidebar-optionpanel  ">
									<a href="#" className="btn btn-danger" onClick={this.GoToMenuChoice.bind(this)}>Tilbage til valg af menu</a>
									<a href="#" className="btn btn-success" onClick={this.downloadHTML.bind(this)}>Eksporter hjemmesiden</a>

								</div>
						
						
								{ this.state.alertLogoImageCopyright ? this.AlertCopyright(): null }
						
					</div>
				</div>
				
			
		</div>
					
					
				
				
				
				
			
				
				
				
			}else{
				contentPreview = <div> 
			
				<div id="rowID" className=" container-fluid" key={"rowMenuShow"} >
						<div className="row">
						
							

							<div  key={"colmdMenuShow"}  className=" col-sm-12 col-md-12 sidebar-left   ">
	
									{divImage}

									<div className="container">		
										<div  className="col-sm-12 col-md-12  ">								
										<h1 className="page-header">Dit Indhold</h1>
										
										<div className="row placeholders">
											<div className="col-xs-6 col-sm-4 placeholder">
												<img src="http://a.bimg.dk/node-images/423/6/620x/6423014-google-m-ikke-forbinde-prsidentfrue-med-prostitution.jpg" className="img-responsive" alt="Generic placeholder thumbnail" height="200" width="200"/>
												<h4>Label</h4>
												<span className="text-muted">Something</span>
											</div>
											<div className="col-xs-6 col-sm-4 placeholder">
												<img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" className="img-responsive" alt="Generic placeholder thumbnail" height="200" width="200"/>
												<h4>Label</h4>
												<span className="text-muted">Something </span>
											</div>
											<div className="col-xs-6 col-sm-4 placeholder">
												<img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" className="img-responsive" alt="Generic placeholder thumbnail" height="200" width="200"/>
												<h4>Label</h4>
												<span className="text-muted">Something </span>
											</div>
										</div>
								
										</div>
									
									</div>
									</div>
							</div>
									<div  key={"colmdOptionsShow"}  className=" col-md-12  col-sm-12   sidebar-optionpanel  ">
									
												
												<a href="#" className="btn btn-default" onClick={this.GoToLogoBannerChoice.bind(this)}>Tilbage til valg af logo eller banner</a>
										
												<a href="#" className="btn btn-default" onClick={this.GoToCreateBannerMenu.bind(this)}>Placer En Menu</a>
										
											
												<a href="#" className="btn btn-default disabled" disabled="disabled" onClick={this.GoToFrontpage.bind(this)}>Tilbage til forsiden</a>
											

								
											</div>
				

					
				</div>	
				
			</div>
			}
		
	
		}
		
		return(
		
				<div>
		
					<CSSTransitionGroup
					  className=""
					  transitionEnterTimeout={125}
					  transitionLeaveTimeout={125}
					  transitionName="example"
					  transitionAppear={true}
					  transitionAppearTimeout={100}
					  component="div"
					  >
						{contentPreview}
							{menuObject}
					
					</CSSTransitionGroup>
					
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
					{ this.state.sloganQuestion ? this.answerBasedOnSlogan(): <ErrorMessages Type="hvis du vælger nej til slogan, så vil der opstå en fejl"/>}
					
					
				</div>
			);
	}
	
	hideContentQuestionMenu(){
		this.setState({ mounted: false });
	}
	
	checkSetLogo() {
		this.setState({ showNextQuestion: true });
	}
	
	checkSetBanner() {
	//	this.setState({ showNextQuestion: false });
		this.setState({bannerMounted : true});
		
		this.setState({ mounted: false });
	}
	
	runSetup() {
		this.setState({ startSetup: true });
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
						
								<a href="hvorfor.html" alt="hvorfor">
									<h2>Hvorfor?</h2>
									<p>
										<img className="img img-responsive  img-circle" src="img/question-1332062.png" alt="why"/>
									</p>	
								</a>
							
						</div>
					</div>
				</div>
				<div className="col-md-4" key={63}>
					<div className="panel effect2 text-center" key={"videoLink"} >
							
							
							<a href='hvem.html' alt='hvem er vi'>
								<h2>Hvem er vi?</h2>
								<p>
									<img className="img img-responsive  img-circle" src="img/question-1332054.png" alt="why"/>
								</p>
							</a>
							
					</div>
				</div>
				
				<div className="col-md-4" key={"Left"}>
					<a href="#OpretSide" onClick={this.runSetup.bind(this)} >
						<div className="panel effect2 text-center " key={"videoLink"} >
								
								
							
								<h2>Opret din side</h2>
								<p>
									<img className="img img-responsive   img-circle" src="img/blank-1217348_1920.jpg" alt="why"/>
								</p>
									
						</div>
					</a>
				</div>
			</div>
				
				
				
			}
			
		if(this.state.startSetup == true && this.state.logoBannerSelected == false){
			
				
			row = 

			<div id="rowID" className=" " key={"row"} >
			
				
				<ProgBar progText="Trin 1 - logo eller banner" width={ 10 }/>
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

				
					<nav>
						<ul className="nav nav-pills pull-left pager">
							<li role="presentation" className="active ">
								<a href="#" className="pagerLink" onClick={this.GoToFrontpage.bind(this)}>Tilbage til forsiden
								</a>
							</li>
						</ul>
					</nav>
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
							this.state.createBannerMenu ? this.insertBannerMenuQuestions(): null 
						}
						
						{
							this.state.createMenu ? this.insertMenuQuestions(): null 
						}
						
						{ this.state.bannerMounted ? this.basedOnBanner(): null }
					</CSSTransitionGroup>
					
					
			
			);
	}
}




class FooterComponent extends
	React.Component{
		constructor(props){
			super(props);
			this.state = {
				value : 'Lavet med bootstrap',
				github : 'Gemt På Github'
			}
		}
		render(){
			var {value} = this.state;
			var {github} = this.state;
			return(
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-3" >
						</div>
						<div className="col-md-6 text-center" >
							<nav>
								<ul className="nav nav-pills pull-left pager">
									<li role="presentation" className="active ">
									
							
										<a className="btn btn-xs btn-success "> Lavet med {this.props.framework}</a>
										<a onClick={this.handleChange.bind(this)}  className="btn btn-xs btn-success "> {value} </a>
										<a href="http://github.com" target='_blank'  className="btn btn-xs btn-success "> {github} </a>
									</li>
								</ul>
							</nav>
						</div>
						<div className="col-md-3" >
						</div>
					</div>
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

/**store - er et array o.s.v data*/
var menuData = [
	{title : "Forside", linkref: "#forside", targetWindow : "_self", selectedClass: "active" , role:"presentation" },
	{title : "Hvorfor", linkref: " hvorfor.html",  targetWindow : "_blank", selectedClass: "" , role:"presentation" },
	{title : "Hvem er vi", linkref: " hvem.html", targetWindow : "_blank", selectedClass: "" , role:"presentation" },
	{title : "Opret din side",onLink : "disabled"  , linkref: " #setup", targetWindow : "_self", selectedClass: "" , role:"presentation" }
	
]

var _emptyArr = [];


class MyLinks extends  React.Component{
    render() {
        return <LinkList data={ menuData }/>;
    }
};	


class LinkList extends  React.Component{
	render() {
        
			var recipeNodes = this.props.data.map(function(links,index){
				return (
					<li key={index} className={links.selectedClass} role={links.role}>
						<a href={links.linkref} disabled={links.onLink} target={links.targetWindow} >
							{links.title}
						</a>
					</li>
				)
			})
			
			return (
			
				<ul className="nav navbar-nav">
					{recipeNodes}
				</ul>
			
			)
    }
};	





class ProgBar extends  React.Component{
	render() {
        
		
			console.log(this.props.width)
			var progressStyle = {
				width: this.props.width +'%'
			  
			};
			
			return (
					<div  key={"colmdOptionsShow"}  className=" col-md-12  col-sm-12   sidebar-optionpaneltop  ">

						<div className="progress">
							<div className="progress-bar progress-bar-info " role="progressbar" aria-valuenow={progressStyle} aria-valuemin="0" aria-valuemax="100" style={progressStyle}>
								{this.props.progText}
							</div>
						</div>


					</div>
			)
    }
};


class myProgressbar extends  React.Component{
    render() {
        return <ReactProgressBar  width={ '10' }/>;
    }
};	

class ReactProgressBar  extends React.Component{
	render() {
			
			var progressStyle = {
			  width: this.props.width
			  
			};
			
			return (
					<div  key={"colmdOptionsShow"}  className=" col-md-12  col-sm-12   sidebar-optionpaneltop  ">

						<div className="progress">
							<div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={progressStyle}>
								{this.props.progText}
							</div>
						</div>


					</div>
			)
    }
};	


	class ErrorMessages  extends React.Component{
		render() {
				return (
						<div class="bs-callout bs-callout-warning" id="callout-alerts-dismiss-use-button"> 
							<h4>Whoops</h4> 
							<p>
								<code>
									{ this.props.Type}
								</code> 
							</p> 
						</div>
				)
		}
	};


/*
		 Store 

        var _recipes = [];

        function addRecipe(text){
            _recipes.push(text);
        }

        var RecipeStore = Flux.createStore({
            getRecipes(){
               return _recipes;
            }
        }, function(payload){
            if(payload.actionType === "ADD_RECIPE") {
                addRecipe(payload.text);
                RecipeStore.emitChange();
            }
        });

        /** Actions 

        var RecipeActions = Flux.createActions({
            addRecipe(text){
               return {
                  actionType: "ADD_RECIPE",
                  text: text
               }
            }
        });

        function getRecipes(){
           return {
               recipes: RecipeStore.getRecipes()
           }
        }
*/
/*
class TestRecipe extends  React.Component{
    addRecipe(){
		
		RecipeActions.addRecipe({title : "Forside", linkref: "#forside", targetWindow : "_self", selectedClass: "active" , role:"presentation"});
	}
	render(){
		return (
			<div class="panel panel-default">
				<ul className="nav navbar-nav">
					{
						
						this.props.data.map(function(links,index){
							return (
								<li key={index} className={links.selectedClass} role={links.role}>
									<a href={links.linkref} target={links.targetWindow} >
										{links.title}
									</a>
								</li>
							)
						})
					}
				</ul>
				<button onClick={this.addRecipe}>Add Recipe</button>
			</div>
		)
	}
};

	ReactDOM.render(	
			<TestRecipe data={ _recipes } />
		, 
		document.getElementById('dataTest')
	);
*/

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
		
			<ContentComponent  >
				  Logo eller Banner
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