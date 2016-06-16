var CSSTransitionGroup = React.addons.CSSTransitionGroup;
var INTERVAL = 2000;

class MenuComponent extends React.Component{
	constructor (props){
		super(props);
		this.state = {
			items:[],
			children: ['Forside','Hvorfor?','Hvem er vi?', 'Opret din side'],
			mounted: false
		}
	}
	componentDidMount() {

	  this.setState({ mounted: true });
	}
	
	handleAdd() {
		var newItems = this.state.items.concat([prompt('Enter some text')]);
		this.setState({items: newItems});
	}
  
	render(){
		var menuLinks;
		if(this.state.mounted ){	
			menuLinks = <MyLinks  />
		}
		
		return (
		
				<div className="blog-masthead header  headercolor blog-nav   navbar-inverse  navbar  navbar-fixed-top" >
						<div className="container">
							<div className="navbar-header">

								<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>                        
								</button>
	
									<a  href="index.html">
										<img src="./img/logo/logo.png" className=" img img-responsive navbar-brand" alt="logo"/>
									</a>
							</div>
							<div class="collapse navbar-collapse" id="myNavbar">

								{menuLinks}
							
							</div>
					</div>		
				</div>
			);
	}
}

class JumbotronComponent extends React.Component{
	constructor (props){
		super(props);
		this.state = {
			items:[],
			mounted: false,
			jumbotronTitle: ['Vælg et logo eller banner?']
			
		}
	}
	componentDidMount() {
	  this.setState({ mounted: true });
	}
	
	handleAdd() {
		var newItems = this.state.jumbotronTitle.concat([prompt('Enter some text')]);
		this.setState({jumbotronTitle: newItems});
	}
	
	render(){

		var jumbotronTitle;
		
		if(this.state.mounted ){	
			jumbotronTitle = this.state.jumbotronTitle.map(function(jumbotronTitle, i) {
				return (
					<div className="container "  href="#" key={jumbotronTitle} >
							<h1>
								{jumbotronTitle}
							</h1>
							<p>
								S&aring;dan g&oslash;r du...
							</p>
					</div>
				)
			}.bind(this));
		}

		return (
		
				<div>
						{jumbotronTitle}
				</div>
			)
	}
}

class JumbotronMenuComponent extends React.Component{
	constructor (props){
		super(props);
		this.state = {
			items:[],
			mounted: false,
			jumbotronTitle: ['Hvor vil du have placeret din menu?']
		}
	}
	componentDidMount() {
	  this.setState({ mounted: true });
	}
	
	handleAdd() {
		var newItems = this.state.jumbotronTitle.concat([prompt('Enter some text')]);
		this.setState({jumbotronTitle: newItems});
	}
	
	render(){

		var jumbotronTitle;
		
		if(this.state.mounted ){	
			jumbotronTitle = this.state.jumbotronTitle.map(function(jumbotronTitle, i) {
				
					<div className="container-fluid "    href="#" key={jumbotronTitle} >
							<h1>
								{jumbotronTitle}
							</h1>
							<p>
								S&aring;dan g&oslash;r du...
							</p>
							
				
					</div>
				
			}.bind(this));
		}

		return (
		
				<div className=" jumbotron jumbotroncolors  text-center">
						{jumbotronTitle}
				</div>
			)
	}
}

class JumbotronFooterComponent extends React.Component{
	constructor (props){
		super(props);
		this.state = {
			mounted: false,
			jumbotronTitle: ['Hvad vil du have placeret i din sidefod?']
			
		}
	}
	componentDidMount() {
	  this.setState({ mounted: true });
	}
	componentWillUnmount() {
		
	}

	render(){

		var jumbotronTitle;
		if(this.state.mounted ){	
			jumbotronTitle = this.state.jumbotronTitle.map(function(jumbotronTitle, i) {
				return (
					<div className="container-fluid "    href="#" key={jumbotronTitle} >
							<h1>
								{jumbotronTitle}
							</h1>
							<p>
								S&aring;dan g&oslash;r du...
							</p>
					</div>
				)
			}.bind(this));
		}

		return (
		
				<div  className=" jumbotron jumbotroncolors  text-center">
						{jumbotronTitle}
				</div>
			)
	}
}


class JumbotronUserContentComponent extends React.Component{
	constructor (props){
		super(props);
		this.state = {
			mounted: false,
			jumbotronTitle: ['Vælg typen af indhold']
		}
	}
	componentDidMount() {
	  this.setState({ mounted: true });
	}

	render(){
		var jumbotronTitle;
		
		if(this.state.mounted ){	
			jumbotronTitle = this.state.jumbotronTitle.map(function(jumbotronTitle, i) {
				return (
					<div className="container-fluid "    href="#" key={jumbotronTitle} >
							<h1>
								{jumbotronTitle}
							</h1>
							<p>
								S&aring;dan g&oslash;r du...
							</p>
							
				
					</div>
				)
			}.bind(this));
		}

		return (
		
				<div className=" jumbotron jumbotroncolors  text-center">
					{jumbotronTitle}
				</div>
		)
	}
}

class ContentComponent extends React.Component{
	constructor (props){
		super(props);
		this.state = {
			items:["row","col-md-6","panel", "panel-body", "text-center", "iframe"],
			mounted: false,
			mountedInfo: false,
			videoLink: ['https://www.youtube.com/embed/p-xGhskA2F0?html5=1'],
			videoMenuLink: ['https://www.youtube.com/embed/ngqakAN1KGI?html5=1'],
			value: "banner",
			bval : "logo",
			showNextQuestion : false,
			sloganQuestion : false,
			sloganText : '',
			footerText : '',
			showPreview: false,
			logoUrl : '',
			mountedFrontpage : false,
			jumbotronWelcomeTitle : 'Velkommen til Nemhed.dk',
			startSetup: false,
			logoBannerSelected : false,
			bannerMounted: false,
			createMenu : false,
			createBannerMenu : false,
			createContent : false,
			menuSelected : 0,
			menuBannerSelected : 0,
			displayBannerImgBtn: true,
			footerSelected : 0,
			contentSelected : 0,
			createFooter : false,
			createFooterOrdinary : false,
			downloadLink: '',
			NextContentQuestion: false,
			menuItem: [],
			contentType : ''
			
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
	
	basedOnSloganNo(){
		this.setState({ mounted: false });	
	}
	basedOnSloganYes(){
		this.setState({sloganQuestion : true});
	}
	
	bindPreview(){
		this.setState({showPreview : true});
	}
	
	handleAddSloganText() {
		var newItems = this.state.sloganText.concat([prompt('Enter some text')]);
		this.setState({sloganText: newItems});
	}
	
	handleAddFooterText() {
		var newItems = this.state.footerText.concat([prompt('Enter some text')]);
		this.setState({footerText: newItems});
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
		return (htmlArgs)
	}
	
	showDownloadLink(){
		return (
			<p>
				{this.state.downloadLink}
			</p>
		)
	}
	
	showMenu(){
		
		return(
			<div className="alert alert-danger alert-dismissible fade in" role="alert"> 
				show something
			</div>
		)
	}
	
	GoToFrontpage(){
		this.setState({ startSetup: false });
		
	}
	
	GoToCreateMenu(){
		this.setState({ createMenu : true});
		this.setState({ showPreview: false});
		
	}
	
	GoToCreateFooter(){
		this.setState({ createFooter : true});
		this.setState({ showPreview: false});
		this.setState({ bannerMounted : true});
		this.setState({ createBannerMenu : false});
	}
	
	GoToCreateFooterOrdinary(){
		this.setState({ createFooterOrdinary : true});
		this.setState({ showPreview: false});
		this.setState({ bannerMounted : false});
		this.setState({ createBannerMenu : false});
	}
	
	GoToCreateContent(){
		this.setState({ createContent : true});
		this.setState({ showPreview: false});
	
		this.setState({ createBannerMenu : false});
		this.setState({ createFooter : false});
		this.setState({ createMenu : false});
		
	}
	
	GoToCreateBannerMenu(){
		this.setState({ createBannerMenu : true});
		this.setState({ showPreview: false});
		this.setState({ bannerMounted : false});
	}
	
	GoToMenuChoice(){
		this.setState({ createMenu : false});
		this.setState({ showPreview: true});
		this.setState({ menuSelected: 0});
	}
	
	menuChoice(choice_param){
		this.setState({ createMenu : false});
		this.setState({menuSelected: choice_param});
		this.setState({ showPreview : true});
	}
	
	footerChoice(choice_param){
		this.setState({ createFooter : false});
		this.setState({ footerSelected: choice_param});
		this.setState({ showPreview : false});
		this.setState({ bannerMounted : true});
	}
	
	footerChoiceOrdinary(choice_param){
		this.setState({ createFooter : false});
		this.setState({ footerSelected: choice_param});
		this.setState({ showPreview : true});
		this.setState({ bannerMounted : false});
		this.setState({ createFooterOrdinary : false});
	}
	
	contentChoice(choice_param){
		this.setState({ 
			NextContentQuestion : true,
			contentType: choice_param,
			showPreview: false
		});
	}
	
	contentChoiceTwo(choice_param_s){
		this.setState({	createContent: false});
		this.setState({	showPreview: true});
		this.setState({	contentSelected: choice_param_s});
	}

	GoToMenuBannerChoice(){
		this.setState({ createBannerMenu : false});
		this.setState({ showPreview: false});
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
					
				<ProgBar progText="Trin 2 / 4 - Menu placering" width={ 40 }/>
					
				<JumbotronMenuComponent  />
				<div  key={"colmdMenu6"}  className="col-md-6 ">
				
					<div className="panel " key={"panel"}>
						<div className="panel-body"  id="panelVideoId" key={"panelVideoBodyMenu"} >
							<p className="text-center" key={"textCenterMenu"}>
								<iframe src={this.state.videoMenuLink}></iframe>
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
			</div>
		)
	}
	
	contentQuestionTwo(){
		var progressStyle = {
		  width: '60%'
		};
		return(
				<div>
					<h2>Hvor mange kolonner ønsker du?</h2>
		
					<form>
						<p className="form-group">

							<label className="radio-inline">
								<input type="radio" name="inlineRadioOptions" id="QuestionTwoMenuOverHeader"  value="1" onClick={this.contentChoiceTwo.bind(this, 1)}  /> 1
							</label>
						</p>
						<p className="form-group">
							<label className="radio-inline">
								<input type="radio" name="inlineRadioOptions" id="QuestionTwoMenuRight"  value="2" onClick={this.contentChoiceTwo.bind(this, 2)} /> 2
							</label>
						</p>
						<p className="form-group">
							<label className="radio-inline">
								<input type="radio" name="inlineRadioOptions" id="QuestionThreeMenuRight"  value="3" onClick={this.contentChoiceTwo.bind(this, 3)} /> 3
							</label>
						</p>
					</form>
			</div>)
	}
	
	insertContentQuestions(){
		
		var progressStyle = {
		  width: '60%'
		};
		
		return(
				<div id="rowID" className=" " key={"rowMenu"} >
				<ProgBar progText="Trin 3 / 4 - Valg af indhold" width={ 60 }/>
				<JumbotronUserContentComponent  />
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
							
							<h2>Hvordan skal indholdet på din side være ?</h2>
				
							<form>
								<p className="form-group">

									<label className="radio-inline">
										<input type="radio" name="inlineRadioOptions" id="QuestionTwoMenuOverHeader"  value="1" onClick={this.contentChoice.bind(this, 'text')}  /> Kun Tekst
									</label>
								</p>
								<p className="form-group">
									<label className="radio-inline">
										<input type="radio" name="inlineRadioOptions" id="QuestionTwoMenuRight"  value="2" onClick={this.contentChoice.bind(this, 'imgText')} /> Tekst & Billeder
									</label>
								</p>
							</form>
							{ this.state.NextContentQuestion ? this.contentQuestionTwo(): null }	
					</div>
				</div>
			</div>
		)
	}
	
	insertFooterQuestions(){
		
		var progressStyle = {
		  width: '60%'
		};
		
		return(
			<div id="rowID" className=" " key={"rowMenu"} >

				<ProgBar progText="Trin 4 / 4 - Placering af sidefod" width={ 80 }/>
				
				<JumbotronFooterComponent  />
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
							<h2>Hvor vil du have i din sidefod ?</h2>
				
							<form>
								<p className="form-group">

									<label className="radio-inline">
										<input type="radio" name="inlineRadioOptions" id="QuestionTwoMenuOverHeader"  value="1" onClick={this.footerChoice.bind(this, 1)}  /> En copyright tekst
									</label>
								</p>
								<p className="form-group">
									<label className="radio-inline">
										<input type="radio" name="inlineRadioOptions" id="QuestionTwoMenuRight"  value="2" onClick={this.footerChoice.bind(this, 2)} /> Tilmelding til nyhedsbrev
									</label>
								</p>
								<p className="form-group">
									<label className="radio-inline">
										<input type="radio" name="inlineRadioOptions" id="QuestionTwoMenuUnderHeader"  value="3" onClick={this.footerChoice.bind(this, 3)} /> En knap til feedback
									</label>
								</p>
							</form>	
					</div>
				</div>
			</div>
		)
	}
	
	
	insertFooterQuestionsOrdinary(){
		
		var progressStyle = {
		  width: '60%'
		};
		
		return(
			<div id="rowID" className=" " key={"rowMenu"} >

				<ProgBar progText="Trin 4 / 4 - Placering af sidefod" width={ 80 }/>
				
				<JumbotronFooterComponent  />
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
							<h2>Hvor vil du have i din sidefod ?</h2>
				
							<form>
								<p className="form-group">

									<label className="radio-inline">
										<input type="radio" name="inlineRadioOptions" id="QuestionTwoMenuOverHeader"  value="1" onClick={this.footerChoiceOrdinary.bind(this, 1)}  /> En copyright tekst
									</label>
								</p>
								<p className="form-group">
									<label className="radio-inline">
										<input type="radio" name="inlineRadioOptions" id="QuestionTwoMenuRight"  value="2" onClick={this.footerChoiceOrdinary.bind(this, 2)} /> Tilmelding til nyhedsbrev
									</label>
								</p>
								<p className="form-group">
									<label className="radio-inline">
										<input type="radio" name="inlineRadioOptions" id="QuestionTwoMenuUnderHeader"  value="3" onClick={this.footerChoiceOrdinary.bind(this, 3)} /> En knap til feedback
									</label>
								</p>
							</form>	
					</div>
				</div>
			</div>
		)
	}
	
	
	
	
	insertBannerMenuQuestions(){
		return(
				<div id="rowID" className=" " key={"rowMenu"} >
			
				<JumbotronMenuComponent  />
				<div  key={"colmdMenu6"}  className="col-md-6 ">
				
					<div className="panel " key={"panel"}>
						<div className="panel-body"  id="panelVideoId" key={"panelVideoBodyMenu"} >
							<p className="text-center" key={"textCenterMenu"}>
								
								<iframe src={this.state.videoMenuLink}></iframe>
									
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
			</div>
		)
	}
	
	changeStateOfMount(){
		this.setState({
            mounted: false,
			showPreview: true,
			logoBannerSelected: true
        });
	}
	
	insertContentBox(){
		return ( <ContentBar logoUrl={this.state.logoUrl} choiceOfContent={this.state.contentType} boxes={this.state.contentSelected} /> )
	}
	
	insertUserOptionsMenu(){
				return(
					<div  key={"colmdOptionsShowUserOption"}  className=" col-md-12  col-sm-12   sidebar-optionpanel  ">
						<a href="#" className="btn btn-default" onClick={this.GoToLogoBannerChoice.bind(this)}>Tilbage til valg af logo eller banner</a>
						<a href="#" className="btn btn-success" onClick={this.GoToCreateMenu.bind(this)}>Placer En Menu</a>
					</div>
				)
	}
	
	insertUserOptionsBannerMenu(){
		return (
			<div  key={"colmdOptionsShowUserOption"}  className=" col-md-12  col-sm-12   sidebar-optionpanel  ">
				<a href="#" className="btn btn-default" onClick={this.GoToLogoBannerChoice.bind(this)}>Tilbage til valg af logo eller banner</a>
				<a href="#" className="btn btn-success" onClick={this.GoToCreateBannerMenu.bind(this)}>Placer En Menu</a>
			</div>
		)
	}
	
	insertUserOptionsContent(){
					if(this.state.createContent){
						
						return(
						<div  key={"colmdOptionsContentShow"}  className=" col-md-12  col-sm-12   sidebar-optionpanel  ">
							<a href="#" className="btn btn-default" onClick={this.GoToLogoBannerChoice.bind(this)}>Tilbage til valg af logo eller banner</a>
							<a href="#" className="btn btn-success" onClick={this.GoToCreateContent.bind(this)}>Placer dit indhold</a>
						</div>
						)
					}else{
						return(
							<div  key={"colmdOptionsContentShowTest"}  className=" col-md-12  col-sm-12   sidebar-optionpanel  ">
								<p>Beklager - du har indsat dit indhold</p>
							</div>
						)
					}
	}
	
	insertUserOptionsFooter(){
			return(
					<div  key={"colmdOptionsFooterShow"}  className=" col-md-12  col-sm-12   sidebar-optionpanel  ">
						<a href="#" className="btn btn-default" onClick={this.GoToLogoBannerChoice.bind(this)}>Tilbage til valg af logo eller banner</a>
						<a href="#" className="btn btn-success" onClick={this.GoToCreateFooter.bind(this)}>Placer En Sidefod</a>
					</div>
				)
	}
	
	insertUserOptionsDefault(){
		return(
			<div  key={"colmdOptionsFooterShow"}  className=" col-md-12  col-sm-12   sidebar-optionpanel  ">
				<a href="#" className="btn btn-default" onClick={this.GoToLogoBannerChoice.bind(this)}>Tilbage til valg af logo eller banner</a>
				<a href="#" className="btn btn-success" onClick={this.GoToCreateMenu.bind(this)}>Placer En Menu</a>
				<a href="#" className="btn btn-success" onClick={this.GoToCreateContent.bind(this)}>Placer dit indhold</a>
				<a href="#" className="btn btn-success" onClick={this.GoToCreateFooter.bind(this)}>Placer En Sidefod</a>
			</div>
		)
		
	}
	
	errorCondition(){
		return(
			<div className="alert alert-danger" role="alert">
			  <a href="#" className="alert-link">Der opstod en fejl</a>
			</div>
		)	
	}

	previewFix(){
		
		var contentPreview;
		var menuObject;
		var menuLinks;
		
		var menuLinksHorizontal;
		
		var progressStyle = {
		  width: '60%'
		};

		var pageFooter = 
			
				<footer className="bs-docs-footer" role="contentinfo"> 
					<div className="container"> 
						<button className="btn btn-info" onClick={this.handleAddFooterText.bind(this)}>Indsæt Tekst Til Sidefod</button>
						<p>
							{this.state.footerText}
						</p>
					</div> 
				</footer>
	
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

		if(this.state.bannerMounted	== false){
			
			
		if(this.state.logoBannerSelected == true && this.state.menuSelected == 0 && this.state.menuBannerSelected == 0)
		{
			contentPreview = <div> 
	
			<div id="rowID" className=" row" key={"rowMenuShow"} >

					<div className="container-fluid">

						<div  key={"colmdMenuShow"}  className=" col-md-12  col-sm-12   sidebar-left  ">

									<div    className=" col-sm-3 col-md-3   ">
										<div key={"panel"}>
											<div className="text-center"  id="panelVideoId" key={"panelMenuBody"} >
												
												<DropzoneDemo />
												<img className="img img-responsive img-thumbnail" src={this.state.logoUrl} alt={this.state.logoUrl} />
											</div>
										</div>
									</div>
									<div    className=" col-sm-9 col-md-9   ">									
										<div key={"panelTwo"}>
											<div className=" text-center"  id="panelVideoId" key={"panelVideoBody"} >
												<button className="btn btn-info" onClick={this.handleAddSloganText.bind(this)}>Indsæt Slogan</button>
												<h1>{this.state.sloganText}</h1>
											</div>
										</div>									
									</div>
								</div>
								<div  key={"colmdOptionsShowMenuSelectedZero"}  className=" col-md-12  col-sm-12   sidebar-optionpanel  ">
									<nav>
									  <ul className="pager">
										<li className="previous"><a href="#" onClick={this.GoToLogoBannerChoice.bind(this)}><span aria-hidden="true">&larr;</span> Tilbage til valg af logo eller banner</a></li>
										<li className="next"><a href="#" onClick={this.GoToCreateMenu.bind(this)}>Placer En Menu <span aria-hidden="true">&rarr;</span></a></li>
									  </ul>
									</nav>
								</div>
								
						</div>
						
				</div>
				{ this.state.contentSelected  ? this.insertContentBox(): null }
		</div>
		
		}
		else if(this.state.menuSelected == 1 && this.state.menuBannerSelected == 0 && this.state.logoBannerSelected == true )
		{
			contentPreview = 
				
				<div id="rowID" className=" row" key={"rowMenuShow"} >
					<div className="container-fluid">

							<div    className=" col-md-12  col-sm-12  sidebar-left  ">
	
									<nav className="navbar navbar-usermenu navbar-static-top">
										<div className="navbar-header">

											<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
												<span className="icon-bar"></span>
												<span className="icon-bar"></span>
												<span className="icon-bar"></span>                        
											</button>
											
										</div>
										<div  className="col-sm-12 col-md-12  ">

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
										</div>
									</nav>
							</div>
					
						<div  key={"colmdMenuShow"}  className=" col-md-12  col-sm-12   sidebar-left  ">
									<div    className=" col-sm-3 col-md-3   ">
										
											<div className="text-center"  id="panelVideoId" key={"panelMenuBody"} >
												<DropzoneDemo />
												<img className="img img-responsive img-thumbnail" src={this.state.logoUrl} alt={this.state.logoUrl} />
											</div>
									
									</div>
									<div    className=" col-sm-9 col-md-9   ">									
										<div  key={"panelTwo"}>
											<div className=" text-center"  id="panelVideoId" key={"panelVideoBody"} >
												<button className="btn btn-info" onClick={this.handleAddSloganText.bind(this)}>Indsæt Slogan</button>
												<h1>{this.state.sloganText}</h1>
											</div>
										</div>									
									</div>
							
										<div className="container">	
										{ this.state.contentSelected  ? this.insertContentBox(): null }
									</div>

						</div>

						<div  key={"colmdOptionsShowSelectedOne"}  className=" col-md-12  col-sm-12   sidebar-optionpanel  ">
							<nav>
							  <ul className="pager">
								<li className="previous"><a href="#" onClick={this.GoToLogoBannerChoice.bind(this)}><span aria-hidden="true">&larr;</span> Tilbage til valg af logo eller banner</a></li>
								<li className="next"><a href="#" onClick={this.GoToCreateContent.bind(this)}>Placer  indhold <span aria-hidden="true">&rarr;</span></a></li>
							  </ul>
							</nav>
						</div>	
	
				</div>
				
				</div>

		}else if(this.state.menuSelected == 2  && this.state.menuBannerSelected == 0  && this.state.logoBannerSelected == true )
		{

			contentPreview = 
			<div>
				<div id="rowID" className=" row" key={"rowMenuShow"} >
					<div className="container-fluid">
					
						<div  key={"colmdMenuShow"}  className=" col-md-12  col-sm-12   sidebar-left  ">
						
							<div  className="col-sm-9 col-md-9  ">
									
								<div    className=" col-sm-3 col-md-3   ">
										<div className="" key={"panel"}>
											<div className=" text-center"  id="panelVideoId" key={"panelMenuBody"} >
												<DropzoneDemo />
												<img className="img img-responsive img-thumbnail" src={this.state.logoUrl} alt={this.state.logoUrl} />
											</div>
										</div>
									</div>
									<div    className=" col-sm-9 col-md-9   ">									
										<div  key={"panelTwo"}>
											<div className="text-center"  id="panelVideoId" key={"panelVideoBody"} >
												<button className="btn btn-info" onClick={this.handleAddSloganText.bind(this)}>Indsæt Slogan</button>
												<h1>{this.state.sloganText}</h1>
											</div>
										</div>									
									</div>
							
								
									<div className="container">	
										{ this.state.contentSelected  ? this.insertContentBox(): null }
									</div>
									
								</div>
							<div    className=" col-md-3  col-sm-3  sidebar-right   ">
					
								<div   className="col-sm-12 col-md-12 sidebar  text-center">
							
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
								<div    className=" col-sm-12 col-md-12   ">
									<FooterBar/>
								</div>
						</div>

						
					</div>
					
				</div>
				<div  key={"colmdOptionsShowSelectedTwo"}  className=" col-md-12  col-sm-12   sidebar-optionpanel  ">
					<nav>
					  <ul className="pager">
						<li className="previous"><a href="#" onClick={this.GoToLogoBannerChoice.bind(this)}><span aria-hidden="true">&larr;</span> Tilbage til valg af logo eller banner</a></li>
						<li className="next"><a href="#" onClick={this.GoToCreateContent.bind(this)}>Placer indhold <span aria-hidden="true">&rarr;</span></a></li>
					  </ul>
					</nav>
				</div>				
		</div>
		}
		
		
		if(this.state.menuSelected == 1 && this.state.contentSelected != 0  && this.state.menuBannerSelected == 0 && this.state.logoBannerSelected == true)
		{
			contentPreview = 
				<div id="rowID" className=" row" key={"rowMenuShow"} >
					<div className="container-fluid">

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
										
											<div className="text-center"  id="panelVideoId" key={"panelMenuBody"} >
												<DropzoneDemo />
												<img className="img img-responsive img-thumbnail" src={this.state.logoUrl} alt={this.state.logoUrl} />
											</div>
									
									</div>
									<div    className=" col-sm-9 col-md-9   ">									
										<div  key={"panelTwo"}>
											<div className=" text-center"  id="panelVideoId" key={"panelVideoBody"} >
												<button className="btn btn-info" onClick={this.handleAddSloganText.bind(this)}>Indsæt Slogan</button>
												<h1>{this.state.sloganText}</h1>
											</div>
										</div>									
									</div>
							
										<div className="container">	
										{ this.state.contentSelected  ? this.insertContentBox(): null }
									</div>

						</div>

						<div  key={"colmdOptionsFooterShow"}  className=" col-md-12  col-sm-12   sidebar-optionpanel  ">
						
							<nav>
							  <ul className="pager">
								<li className="previous"><a href="#" onClick={this.GoToLogoBannerChoice.bind(this)}><span aria-hidden="true">&larr;</span> Tilbage til valg af logo eller banner</a></li>
								<li className="next"><a href="#" onClick={this.GoToCreateFooterOrdinary.bind(this)}>Placer Sidefod <span aria-hidden="true">&rarr;</span></a></li>
							  </ul>
							</nav>
						
						</div>
				</div>
				
				</div>
		}else if(this.state.menuSelected == 2 && this.state.contentSelected != 0 && this.state.menuBannerSelected == 0  && this.state.logoBannerSelected == true)
		{
			contentPreview = 

			<div>
				<div id="rowID" className=" row" key={"rowMenuShow"} >
					<div className="container">
					
						<div  key={"colmdMenuShow"}  className=" col-md-12  col-sm-12   sidebar-left  ">
						
							<div  className="col-sm-9 col-md-9  ">
									
								<div    className=" col-sm-3 col-md-3   ">
										<div className="" key={"panel"}>
											<div className=" text-center"  id="panelVideoId" key={"panelMenuBody"} >
												<DropzoneDemo />
												<img className="img img-responsive img-thumbnail" src={this.state.logoUrl} alt={this.state.logoUrl} />
											</div>
										</div>
									</div>
									<div    className=" col-sm-9 col-md-9   ">									
										<div  key={"panelTwo"}>
											<div className="text-center"  id="panelVideoId" key={"panelVideoBody"} >
												<button className="btn btn-info" onClick={this.handleAddSloganText.bind(this)}>Indsæt Slogan</button>
												<h1>{this.state.sloganText}</h1>
											</div>
										</div>									
									</div>
							
								
									<div className="container">	
										{ this.state.contentSelected  ? this.insertContentBox(): null }
									</div>
									
								</div>
							<div    className=" col-md-3  col-sm-3  sidebar-right   ">
					
								<div   className="col-sm-12 col-md-12 sidebar text-center">
							
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
				<div  key={"colmdOptionsFooterShow"}  className=" col-md-12  col-sm-12   sidebar-optionpanel  ">

					<nav>
					  <ul className="pager">
						<li className="previous"><a href="#" onClick={this.GoToLogoBannerChoice.bind(this)}><span aria-hidden="true">&larr;</span> Tilbage til valg af logo eller banner</a></li>
						<li className="next"><a href="#" onClick={this.GoToCreateFooterOrdinary.bind(this)}>Placer Sidefod <span aria-hidden="true">&rarr;</span></a></li>
					  </ul>
					</nav>
				
				</div>
							
		</div>
		}

		if(this.state.menuSelected == 1 && this.state.contentSelected != 0 && this.state.footerSelected != 0 && this.state.menuBannerSelected == 0 && this.state.logoBannerSelected == true)
		{
		
			contentPreview = 
				<div id="rowID" className=" row" key={"rowMenuShow"} >
					<div className="container-fluid">
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
										
											<div className="text-center"  id="panelVideoId" key={"panelMenuBody"} >
												<DropzoneDemo />
												<img className="img img-responsive img-thumbnail" src={this.state.logoUrl} alt={this.state.logoUrl} />
											</div>
									
									</div>
									<div    className=" col-sm-9 col-md-9   ">									
										<div  key={"panelTwo"}>
											<div className=" text-center"  id="panelVideoId" key={"panelVideoBody"} >
												<button className="btn btn-info" onClick={this.handleAddSloganText.bind(this)}>Indsæt Slogan</button>
												<h1>{this.state.sloganText}</h1>
											</div>
										</div>									
									</div>
							
										<div className="container">	
										{ this.state.contentSelected  ? this.insertContentBox(): null }
									</div>
						</div>
						
						<div  key={"colmdFooterShow"}  className=" col-md-12  col-sm-12   sidebar-left  ">
							<div  className="col-sm-12 col-md-12  ">	
								<FooterBar/>
							</div>
						</div>
			
						
						<div  key={"colmdOptionsFooterShow"}  className=" col-md-12  col-sm-12   sidebar-optionpanel  ">

							<nav>
								<ul className="pager">
									<li className="previous"><a href="#" onClick={this.GoToFrontpage.bind(this)}><span aria-hidden="true">&larr;</span> Tilbage til forsiden</a></li>
									<li className="next"><a href="#" onClick={this.downloadHTML.bind(this)}>Download HTML <span aria-hidden="true">&rarr;</span></a></li>
								</ul>
							</nav>
						</div>
				</div>
				
				</div>
		}else	if(this.state.menuSelected == 2 && this.state.contentSelected != 0 && this.state.footerSelected != 0 && this.state.menuBannerSelected == 0 && this.state.logoBannerSelected == true)
		{
			contentPreview = 

			<div>
				<div id="rowID" className=" row" key={"rowMenuShow"} >
					<div className="container">
					
						<div  key={"colmdMenuShow"}  className=" col-md-12  col-sm-12   sidebar-left  ">
						
							<div  className="col-sm-9 col-md-9  ">
									
								<div    className=" col-sm-3 col-md-3   ">
										<div className="" key={"panel"}>
											<div className=" text-center"  id="panelVideoId" key={"panelMenuBody"} >
												<DropzoneDemo />
												<img className="img img-responsive img-thumbnail" src={this.state.logoUrl} alt={this.state.logoUrl} />
											</div>
										</div>
									</div>
									<div    className=" col-sm-9 col-md-9   ">									
										<div  key={"panelTwo"}>
											<div className="text-center"  id="panelVideoId" key={"panelVideoBody"} >
												<button className="btn btn-info" onClick={this.handleAddSloganText.bind(this)}>Indsæt Slogan</button>
												<h1>{this.state.sloganText}</h1>
											</div>
										</div>									
									</div>
							
								
									<div className="container">	
										{ this.state.contentSelected  ? this.insertContentBox(): null }
									</div>
									
								</div>
							<div    className=" col-md-3  col-sm-3  sidebar-right   ">
					
								<div   className="col-sm-12 col-md-12 sidebar  text-center">
							
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
								<div    className=" col-sm-12 col-md-12   ">
									<FooterBar/>
								</div>
						</div>
					</div>
					
				</div>
				<div  key={"colmdOptionsFooterShow"}  className=" col-md-12  col-sm-12   sidebar-optionpanel  ">

					<nav>
						<ul className="pager">
							<li className="previous"><a href="#" onClick={this.GoToFrontpage.bind(this)}><span aria-hidden="true">&larr;</span> Tilbage til forsiden</a></li>
							<li className="next"><a href="#" onClick={this.downloadHTML.bind(this)}>Download HTML <span aria-hidden="true">&rarr;</span></a></li>
						</ul>
					</nav>
				</div>
							
		</div>
		}
		}
		return(
				<div>
						{contentPreview}
						{menuObject}
			</div>
		)
		
		
	}
	
	answerBasedOnSlogan(){
		return(
				<div className="">
					<button className="btn btn-xs btn-info" onClick={this.changeStateOfMount.bind(this)}>Vis Resultatet</button>
				</div>
			)
	}
	
	basedOnBanner(){
	
		var contentPreview;
		var menuObject;
		var menuLinks;
		
		var menuLinksHorizontal;
		
		
		
		var pageFooter = 
	
		<footer className="bs-docs-footer" role="contentinfo"> 
			<div className="container"> 
				<button className="btn btn-info" onClick={this.handleAddFooterText.bind(this)}>Indsæt Tekst Til Sidefod</button>
				<p>
					{this.state.footerText}
				</p>
			</div> 
		</footer>
		
		menuLinks = this.state.menuItem.map(function(item, i) {
			return (
			
			
				<li className="">
					<a className=" "  href={item} key={item} >
						{item}
					</a>
				</li>
			)
		}.bind(this));
		
		menuLinksHorizontal = this.state.menuItem.map(function(item, i) {
			return (
			
				
					<div>
						<ul className="nav nav-pills nav-stacked" key={item}>
							<li className="active"><a href={item}>{item}</a></li>
						</ul>

						<div class="clearfix visible-lg"></div>
					</div>
			)
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
									<DropzoneDemo />
									<img className="img img-responsive" src={this.state.logoUrl} alt={this.state.logoUrl} />								
								</div>
			}else{
					divImage = 		
							  
								<div  style={divStyle}   className="   ">			
									
									<img className="img img-responsive" src={this.state.logoUrl} alt={this.state.logoUrl} />								
								</div>
			}
			
			
			if(this.state.displayBannerImgBtn && this.state.menuBannerSelected == 0 && this.state.menuSelected == 0){
				
				contentPreview = <div> 
					<div className="container-fluid">
						<div id="rowID" className=" row" key={"rowMenuShow"} >
						
						<div  key={"colmdOptionsShow"}  className=" col-md-12    ">
						
								<div  key={"colmdMenuShow"}  className=" col-sm-12 col-md-12  sidebar-left  ">
											{divImage}
							
											<div className="container">	
												{ this.state.contentSelected  ? this.insertContentBox(): null }
											</div>

										</div>
										
								</div>
						
					</div>
					{ this.state.createMenu == false  ? this.insertUserOptionsBannerMenu(): null }

				</div>	
			</div>
			
			}else if(this.state.menuBannerSelected == 1 && this.state.menuSelected == 0) 
			{
				contentPreview = <div> 
				
				<div id="rowID" className=" container-fluid" key={"rowMenuShow"} >
						<div className="row">
						
						
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
										{ this.state.contentSelected  ? this.insertContentBox(): null }
									</div>
									
									</div>

								<div  key={"colmdOptionsShowMenuBannerSelectedOne"}  className=" col-md-12  col-sm-12   sidebar-optionpanel  ">
								
									<nav>
										<ul className="pager">
											<li className="previous"><a href="#" onClick={this.GoToMenuChoice.bind(this)}><span aria-hidden="true">&larr;</span> Tilbage til valg af menu</a></li>
											<li className="next"><a href="#" onClick={this.GoToCreateContent.bind(this)}>Placer indhold <span aria-hidden="true">&rarr;</span></a></li>
										</ul>
									</nav>
								</div>
					</div>
					
				</div>	
				
			</div>
			}else if(this.state.menuBannerSelected == 2 && this.state.menuSelected == 0) 
			{
				
				contentPreview = 
			<div>
				<div id="rowID" className=" container-fluid" key={"rowMenuShow"} >
					<div className="row">
						
							<div  key={"colmdMenuShow"}  className=" col-md-12  col-sm-12   sidebar-left  ">
						
								<div  className="col-sm-9 col-md-9  ">
										{divImage}
										<div className="container">	
											{ this.state.contentSelected  ? this.insertContentBox(): null }
										</div>
									
									</div>
								
									<div    className=" col-md-3  col-sm-3  sidebar-right   ">
						
										<div   className="col-sm-12 col-md-12 sidebar text-center">
								
														<a href="#" className="btn btn-info" onClick={this.addMenuArea.bind(this)} >Indsæt Menupunkt</a>
															
													
														{menuLinksHorizontal}

										</div>
								</div>
							</div>
								
								<div  key={"colmdOptionsShowBannerSelectedTwo"}  className=" col-md-12  col-sm-12   sidebar-optionpanel  ">
								
									<nav>
										<ul className="pager">
											<li className="previous"><a href="#" onClick={this.GoToMenuChoice.bind(this)}><span aria-hidden="true">&larr;</span> Tilbage til valg af menu</a></li>
											<li className="next"><a href="#" onClick={this.GoToCreateContent.bind(this)}>Placer indhold <span aria-hidden="true">&rarr;</span></a></li>
										</ul>
									</nav>

								</div>
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
											{ this.state.contentSelected  ? this.insertContentBox(): null }
										</div>
									</div>
							</div>
							{ this.state.createMenu == false  ? this.insertUserOptionsMenu(): null }
								
				</div>	
				
							{ this.state.contentSelected  ? this.insertContentBox(): null }
		
			</div>
			}
		

		if(this.state.menuBannerSelected == 1 && this.state.contentSelected != 0  && this.state.menuSelected == 0 )
		{
		
				contentPreview = <div> 
				
				<div id="rowID" className=" container-fluid" key={"rowMenuShow"} >
						<div className="row">
						
						
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
									{ this.state.contentSelected  ? this.insertContentBox(): null }
								</div>
									
							
								
							
							</div>
							
								<div  key={"colmdOptionsFooterShow"}  className=" col-md-12  col-sm-12   sidebar-optionpanel  ">
									<nav>
										<ul className="pager">
											<li className="previous"><a href="#" onClick={this.GoToLogoBannerChoice.bind(this)}><span aria-hidden="true">&larr;</span>Tilbage til valg af logo eller banner</a></li>
											<li className="next"><a href="#" onClick={this.GoToCreateFooter.bind(this)}>Placer En Sidefod <span aria-hidden="true">&rarr;</span></a></li>
										</ul>
									</nav>
								</div>
					</div>
					
				</div>	
				
			</div>
		}else if(this.state.menuBannerSelected == 2 && this.state.contentSelected != 0 && this.state.menuSelected == 0  )
		{

		contentPreview = 
			<div>
				<div id="rowID" className=" container-fluid" key={"rowMenuShow"} >
					<div className="row">
						
							<div  key={"colmdMenuShow"}  className=" col-md-12  col-sm-12   sidebar-left  ">
						
								<div  className="col-sm-9 col-md-9  ">
										{divImage}
										<div className="container">	
											{ this.state.contentSelected  ? this.insertContentBox(): null }
										</div>
									
									</div>
								
									<div    className=" col-md-3  col-sm-3  sidebar-right   ">
						
										<div   className="col-sm-12 col-md-12 sidebar text-center">
								
														<a href="#" className="btn btn-info" onClick={this.addMenuArea.bind(this)} >Indsæt Menupunkt</a>
															
													
														{menuLinksHorizontal}

										</div>
								</div>
							</div>
							<div    className=" col-sm-12 col-md-12   ">
							
							</div>
							<div  key={"colmdOptionsFooterShow"}  className=" col-md-12  col-sm-12   sidebar-optionpanel  ">
								<nav>
									<ul className="pager">
										<li className="previous"><a href="#" onClick={this.GoToLogoBannerChoice.bind(this)}><span aria-hidden="true">&larr;</span>Tilbage til valg af logo eller banner</a></li>
										<li className="next"><a href="#" onClick={this.GoToCreateFooter.bind(this)}>Placer En Sidefod <span aria-hidden="true">&rarr;</span></a></li>
									</ul>
								</nav>
							</div>
					</div>
				</div>
		</div>
		}
		if(this.state.menuBannerSelected == 1 && this.state.contentSelected != 0 && this.state.footerSelected != 0 && this.state.menuSelected == 0 )
		{
			contentPreview = 
				<div id="rowID" className=" row" key={"rowMenuShow"} >
					<div className="container-fluid">

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
										
											<div className="text-center"  id="panelVideoId" key={"panelMenuBody"} >
												<DropzoneDemo />
												<img className="img img-responsive img-thumbnail" src={this.state.logoUrl} alt={this.state.logoUrl} />
											</div>
									
									</div>
									<div    className=" col-sm-9 col-md-9   ">									
										<div  key={"panelTwo"}>
											<div className=" text-center"  id="panelVideoId" key={"panelVideoBody"} >
												<button className="btn btn-info" onClick={this.handleAddSloganText.bind(this)}>Indsæt Slogan</button>
												<h1>{this.state.sloganText}</h1>
											</div>
										</div>									
									</div>
							
										<div className="container">	
										{ this.state.contentSelected  ? this.insertContentBox(): null }
									</div>
								
								
									<FooterBar/>
								

						</div>

						<div  key={"colmdOptionsFooterShow"}  className=" col-md-12  col-sm-12   sidebar-optionpanel  ">
							<nav>
								<ul className="pager">
									<li className="previous"><a href="#" onClick={this.GoToFrontpage.bind(this)}><span aria-hidden="true">&larr;</span>Tilbage til forsiden</a></li>
									<li className="next"><a href="#" onClick={this.downloadHTML.bind(this)}>Download HTML <span aria-hidden="true">&rarr;</span></a></li>
								</ul>
							</nav>
						</div>
				</div>
				
				</div>
		}else	if(this.state.menuBannerSelected == 2 && this.state.contentSelected != 0 && this.state.footerSelected != 0 && this.state.menuSelected == 0 )
		{
			
			contentPreview = 

			<div>
				<div id="rowID" className=" row" key={"rowMenuShow"} >
					<div className="container">
					
						<div  key={"colmdMenuShow"}  className=" col-md-12  col-sm-12   sidebar-left  ">
						
							<div  className="col-sm-9 col-md-9  ">
									
								<div    className=" col-sm-3 col-md-3   ">
										<div className="" key={"panel"}>
											<div className=" text-center"  id="panelVideoId" key={"panelMenuBody"} >
												<DropzoneDemo />
												<img className="img img-responsive img-thumbnail" src={this.state.logoUrl} alt={this.state.logoUrl} />
											</div>
										</div>
									</div>
									<div    className=" col-sm-9 col-md-9   ">									
										<div  key={"panelTwo"}>
											<div className="text-center"  id="panelVideoId" key={"panelVideoBody"} >
												<button className="btn btn-info" onClick={this.handleAddSloganText.bind(this)}>Indsæt Slogan</button>
												<h1>{this.state.sloganText}</h1>
											</div>
										</div>									
									</div>
							
								
									<div className="container">	
										{ this.state.contentSelected  ? this.insertContentBox(): null }
									</div>
									
								</div>
							
							
							<div    className=" col-md-3  col-sm-3  sidebar-right   ">
					
								<div   className="col-sm-12 col-md-12 sidebar  text-center">
							
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
						
									<FooterBar/>
								
						</div>
					</div>
					
				</div>
				<div  key={"colmdOptionsFooterShow"}  className=" col-md-12  col-sm-12   sidebar-optionpanel  ">
					<nav>
						<ul className="pager">
						<li className="previous"><a href="#" onClick={this.GoToFrontpage.bind(this)}><span aria-hidden="true">&larr;</span>Tilbage til forsiden</a></li>
						<li className="next"><a href="#" onClick={this.downloadHTML.bind(this)}>Download HTML <span aria-hidden="true">&rarr;</span></a></li>
						</ul>
					</nav>
				</div>			
		</div>
		}
		}
		return(
				<div>
					{contentPreview}
					{menuObject}
			</div>

		)
	
	}
	
	basedOnLogo(){
		return(
			
				<div className="">
				
			
								<div className="col-md-4" >
								
									
									<ModalHelpController imgUrl="img/user_help_slogan.png" />
								</div>
								<div className="col-md-8" >
									<h2>Har du et slogan <p className="small-caps small">{this.props.option} </p></h2>
								</div>
						
							
							<div className="col-md-12" >
							</div>
							
							
								<div className="col-md-2" >
									
									<img src="img/pencil_2_icon.png" className="img img-responsive " alt="vores logo" />
								</div>
								<div className="col-md-10" >
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
							
				</div>
			)
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
						
								<h1 className='pFrontpage'>{this.state.jumbotronWelcomeTitle}</h1>
								
								<p className='pFrontpage'>
									Nemhed.dk er en udstrækt hånd til dig der gerne vil skabe din helt egen, unikke hjemmeside, men ikke har nogen erfaring med html-koder. Du vil blive guidet gennem alle trin. Og skulle det ikke være nok, kan du også få hjælp fra vores hjælpevideoer.
								</p>
							</div>
				</div>
			
				<div  key={"colmd6bob"}  className="col-md-4 ">
				
					<div className="panel  " key={"panelbob"}>
				
						
								<a className="thumbnail" href="hvorfor.html" alt="hvorfor">
									<h2 className="text-center">Hvorfor?</h2>
									<img src="img/new/hvorfor.png" className=" img img-responsive  " alt="Hvorfor nemhed.dk"/>
								</a>
						
					</div>
				</div>
				<div className="col-md-4" key={63}>
					<div className="panel" key={"videoLink"} >
							
							
							<a className="thumbnail" href='hvem.html' alt='hvem er vi'>
								<h2 className="text-center">Hvem er vi?</h2>
								
									<img className="img img-responsive  " src="img/new/hvem-er-vi.png" alt="Hvem står bag nemhed.dk"/>
								
							</a>
					</div>
				</div>
				
				<div className="col-md-4" key={"Left"}>
					
					<div className="panel  " key={"videoLink"} >
						<a className="thumbnail" href="#OpretSide" onClick={this.runSetup.bind(this)} >	
							<h2 className="text-center">Opret din side</h2>
							
								<img className="img img-responsive" src="img/new/opret-din-side.png" alt="Hvad gør jeg?"/>
							
						</a>
					</div>			
				</div>
			</div>

			}
			
		if(this.state.startSetup == true && this.state.logoBannerSelected == false){
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
						<div className="panel-body"  id="panelVideoId" >
							<div className="col-md-12" >
								<div className="col-md-4" >
									<ModalHelpController imgUrl="img/user_help_logo_or_banner.png" />
								</div>
								<div className="col-md-8" >
									<h2>Har du et {this.props.children}</h2>
								</div>
							</div>
							
							<div className="col-md-12" >
							</div>
							
							<div className="col-md-12" >
								<div className="col-md-2" >
								
									<img src="img/pencil_icon.png"  className="img img-responsive " alt="vores logo" />
								
								</div>
								<div className="col-md-10" >
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
							
								</div>
									{ this.state.showNextQuestion ? this.basedOnLogo(): null }
							</div>
						</div>
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
			<div>
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
					
					{
						this.state.createContent ? this.insertContentQuestions(): null 
					}
					
					{
						this.state.createFooter ? this.insertFooterQuestions(): null 
						
					}
					{	this.state.createFooterOrdinary ? this.insertFooterQuestionsOrdinary(): null }
					{ 	this.state.bannerMounted ? this.basedOnBanner(): null }
		
			</div>
		)
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
			)
		}
		handleChange(event) {
			this.setState({value: this.state.value = 'Easter Eeg ;) '});
		}

	}

/**"store" - er et array o.s.v data*/
var menuData = [
	{title : "Forside", linkref: "#forside", targetWindow : "_self", selectedClass: "active" , role:"presentation" },
	{title : "Hvorfor", linkref: " hvorfor.html",  targetWindow : "_blank", selectedClass: "" , role:"presentation" },
	{title : "Hvem er vi", linkref: " hvem.html", targetWindow : "_blank", selectedClass: "" , role:"presentation" },
	{title : "Opret din side",onLink : "disabled"  , linkref: " #setup", targetWindow : "_self", selectedClass: "" , role:"presentation" }
]

var _emptyArr = [];
class MyLinks extends  React.Component{
    render() {
        return (<LinkList data={ menuData }/>)
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
	
class FooterBar extends  React.Component{
	constructor (props){
		super(props);
		this.state = {
			footerText : ''
		}
	}
	handleAddFooterText() {
		var newItems = this.state.footerText.concat([prompt('Enter some text')]);
		this.setState({footerText: newItems});
	}
	
	render() {
		return (
			<footer className="bs-docs-footer" role="contentinfo"> 
				<div className="container"> 
					<button className="btn btn-info" onClick={this.handleAddFooterText.bind(this)}>Indsæt Tekst Til Sidefod</button>
					<p>
						{this.state.footerText}
					</p>
				</div> 
			</footer>
		)
    }
};


class ContentBar extends  React.Component{
	
	constructor (props){
		super(props);
		this.state = {
			headlineText : '',
			subText: '',
			logoUrl : './img/nyt_logo.png',
			isShowing: true
		}
	}
	
	handleAddHeadline() {
		var newItems = this.state.headlineText.concat([prompt('Forfat en overskrift')]);
		this.setState({headlineText: newItems});
	}
	
	handleAddSubtext() {
		var newItems = this.state.subText.concat([prompt('Forfat en overskrift')]);
		this.setState({subText: newItems});
	}
	
	handleSetLogo() {
		this.setState({ logoUrl : this.props.logoUrl});
	}
	
	render() {

			{ this.state.isShowing ? this.handleSetLogo: null }
			if(this.props.choiceOfContent == "text")
			{
				if(this.props.boxes == 1){
					return( <div  className="col-sm-12 col-md-12  ">								
						<h1 className="page-header">Dit Indhold</h1>
						
						<div className="row placeholders">
							<div className="col-xs-6 col-sm-12 col-md-12 placeholder">
								
								
								<button className="btn btn-info" onClick={this.handleAddHeadline.bind(this)}>Indsæt Tekst Til Overskrift</button>
								<button className="btn btn-info" onClick={this.handleAddSubtext.bind(this)}>Indsæt Brødtekst</button>
								
								<h4 onClick={this.handleAddHeadline.bind(this)} >{this.state.headlineText}</h4>
								<span className="text-muted">{this.state.subText}</span>
							</div>
						</div>		
					</div>
					)
				}else if(this.props.boxes == 2){
						return ( <div  className="col-sm-12 col-md-12  ">								
						<h1 className="page-header">Dit Indhold</h1>
						
						<div className="row placeholders">
							<div className="col-xs-6 col-sm-6 col-md-6 placeholder">
								<button className="btn btn-info" onClick={this.handleAddHeadline.bind(this)}>Indsæt Tekst Til Overskrift</button>
								<button className="btn btn-info" onClick={this.handleAddSubtext.bind(this)}>Indsæt Brødtekst</button>
					
								<h4 onClick={this.handleAddHeadline.bind(this)} >{this.state.headlineText}</h4>
								<span className="text-muted">{this.state.subText}</span>
							</div>
							<div className="col-xs-6 col-sm-6  col-md-6 placeholder">
								<button className="btn btn-info" onClick={this.handleAddHeadline.bind(this)}>Indsæt Tekst Til Overskrift</button>
								<button className="btn btn-info" onClick={this.handleAddSubtext.bind(this)}>Indsæt Brødtekst</button>
					
								<h4 onClick={this.handleAddHeadline.bind(this)} >{this.state.headlineText}</h4>
								<span className="text-muted">{this.state.subText}</span>
							</div>
						</div>
		
					</div>)
				}else{
					return( <div  className="col-sm-12 col-md-12  ">								
						<h1 className="page-header">Dit Indhold</h1>
						
						<div className="row placeholders">
							<div className="col-xs-6 col-sm-4 col-md-4 placeholder">
								<button className="btn btn-info" onClick={this.handleAddHeadline.bind(this)}>Indsæt Tekst Til Overskrift</button>
								<button className="btn btn-info" onClick={this.handleAddSubtext.bind(this)}>Indsæt Brødtekst</button>
					
								<h4 onClick={this.handleAddHeadline.bind(this)} >{this.state.headlineText}</h4>
								<span className="text-muted">{this.state.subText}</span>
							</div>
							<div className="col-xs-6 col-sm-4 col-md-4 placeholder">
								<button className="btn btn-info" onClick={this.handleAddHeadline.bind(this)}>Indsæt Tekst Til Overskrift</button>
								<button className="btn btn-info" onClick={this.handleAddSubtext.bind(this)}>Indsæt Brødtekst</button>
					
								<h4 onClick={this.handleAddHeadline.bind(this)} >{this.state.headlineText}</h4>
								<span className="text-muted">{this.state.subText}</span>
							</div>
							<div className="col-xs-6 col-sm-4 col-md-4 placeholder">
								<button className="btn btn-info" onClick={this.handleAddHeadline.bind(this)}>Indsæt Tekst Til Overskrift</button>
								<button className="btn btn-info" onClick={this.handleAddSubtext.bind(this)}>Indsæt Brødtekst</button>
					
								<h4 onClick={this.handleAddHeadline.bind(this)} >{this.state.headlineText}</h4>
								<span className="text-muted">{this.state.subText}</span>
							</div>
						</div>		
					</div>
					)
				}
			}else{
				if(this.props.boxes == 1){
					return( <div  className="col-sm-12 col-md-12  ">								
						<h1 className="page-header">Dit Indhold</h1>
						
						<div className="row placeholders">
							<div className="col-xs-6 col-sm-12 col-md-12 placeholder">
								<DropzoneDemo />
								<img className="img img-responsive" src={this.state.logoUrl} alt={this.props.logoUrl} />
								
								<button className="btn btn-info" onClick={this.handleAddHeadline.bind(this)}>Indsæt Tekst Til Overskrift</button>
								<button className="btn btn-info" onClick={this.handleAddSubtext.bind(this)}>Indsæt Brødtekst</button>
					
								<h4 onClick={this.handleAddHeadline.bind(this)} >{this.state.headlineText}</h4>
								<span className="text-muted">{this.state.subText}</span>
							</div>
						</div>		
					</div>
					)
				}else if(this.props.boxes == 2){
						return ( <div  className="col-sm-12 col-md-12  ">								
						<h1 className="page-header">Dit Indhold</h1>
						
						<div className="row placeholders">
							<div className="col-xs-6 col-sm-6 col-md-6 placeholder">
								<DropzoneDemo />
								<img className="img img-responsive" src={this.props.logoUrl} alt={this.props.logoUrl} />
								<button className="btn btn-info" onClick={this.handleAddHeadline.bind(this)}>Indsæt Tekst Til Overskrift</button>
								<button className="btn btn-info" onClick={this.handleAddSubtext.bind(this)}>Indsæt Brødtekst</button>
					
								<h4 onClick={this.handleAddHeadline.bind(this)} >{this.state.headlineText}</h4>
								<span className="text-muted">{this.state.subText}</span>
							</div>
							<div className="col-xs-6 col-sm-6  col-md-6 placeholder">
								<DropzoneDemo />
								<img className="img img-responsive" src={this.props.logoUrl} alt={this.props.logoUrl} />
								<button className="btn btn-info" onClick={this.handleAddHeadline.bind(this)}>Indsæt Tekst Til Overskrift</button>
								<button className="btn btn-info" onClick={this.handleAddSubtext.bind(this)}>Indsæt Brødtekst</button>
					
								<h4 onClick={this.handleAddHeadline.bind(this)} >{this.state.headlineText}</h4>
								<span className="text-muted">{this.state.subText}</span>
							</div>
						</div>
		
					</div>)
				}else{
					return( <div  className="col-sm-12 col-md-12  ">								
						<h1 className="page-header">Dit Indhold</h1>
						
						<div className="row placeholders">
							<div className="col-xs-6 col-sm-4 col-md-4 placeholder">
								<DropzoneDemo />
								<img className="img img-responsive" src={this.props.logoUrl} alt={this.props.logoUrl} />
								<button className="btn btn-info" onClick={this.handleAddHeadline.bind(this)}>Indsæt Tekst Til Overskrift</button>
								<button className="btn btn-info" onClick={this.handleAddSubtext.bind(this)}>Indsæt Brødtekst</button>
					
								<h4 onClick={this.handleAddHeadline.bind(this)} >{this.state.headlineText}</h4>
								<span className="text-muted">{this.state.subText}</span>
							</div>
							<div className="col-xs-6 col-sm-4 col-md-4 placeholder">
								<DropzoneDemo />
								<img className="img img-responsive" src={this.props.logoUrl} alt={this.props.logoUrl} />
								<button className="btn btn-info" onClick={this.handleAddHeadline.bind(this)}>Indsæt Tekst Til Overskrift</button>
								<button className="btn btn-info" onClick={this.handleAddSubtext.bind(this)}>Indsæt Brødtekst</button>
					
								<h4 onClick={this.handleAddHeadline.bind(this)} >{this.state.headlineText}</h4>
								<span className="text-muted">{this.state.subText}</span>
							</div>
							<div className="col-xs-6 col-sm-4 col-md-4 placeholder">
								<DropzoneDemo />
								<img className="img img-responsive" src={this.props.logoUrl} alt={this.props.logoUrl} />
								<button className="btn btn-info" onClick={this.handleAddHeadline.bind(this)}>Indsæt Tekst Til Overskrift</button>
								<button className="btn btn-info" onClick={this.handleAddSubtext.bind(this)}>Indsæt Brødtekst</button>
					
								<h4 onClick={this.handleAddHeadline.bind(this)} >{this.state.headlineText}</h4>
								<span className="text-muted">{this.state.subText}</span>
							</div>
						</div>		
					</div>
					)
				}
				
			}			
    }
};

class ProgBar extends  React.Component{
	render() {
			var progressStyle = {
				width: this.props.width +'%'
			  
			};
			
			return (
				<div  key={"colmdOptionsShowProgBar"}  className=" col-md-12  col-sm-12   sidebar-optionpaneltop  ">
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
        return (<ReactProgressBar  width={ '10' }/>);
    }
};	

class ReactProgressBar  extends React.Component{
	render() {
			
			var progressStyle = {
			  width: this.props.width
			  
			};
			
			return (
				<div  key={"colmdOptionsShowBar"}  className=" col-md-12  col-sm-12   sidebar-optionpaneltop  ">

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
				<div className="bs-callout bs-callout-warning" id="callout-alerts-dismiss-use-button"> 
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
	
/** McFly */

var Flux = new McFly();
	
const supportMultiple = (typeof document !== 'undefined' && document && document.createElement) ?
  'multiple' in document.createElement('input') :
  true;

class Dropzone extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.onClick = this.onClick.bind(this);
    this.onDragEnter = this.onDragEnter.bind(this);
    this.onDragLeave = this.onDragLeave.bind(this);
    this.onDragOver = this.onDragOver.bind(this);
    this.onDrop = this.onDrop.bind(this);

    this.state = {
      isDragActive: false
    };
  }

  componentDidMount() {
    this.enterCounter = 0;
  }

  onDragEnter(e) {
    e.preventDefault();

    // Count the dropzone and any children that are entered.
    ++this.enterCounter;

    // This is tricky. During the drag even the dataTransfer.files is null
    // But Chrome implements some drag store, which is accesible via dataTransfer.items
    const dataTransferItems = e.dataTransfer && e.dataTransfer.items ? e.dataTransfer.items : [];

    // Now we need to convert the DataTransferList to Array
    const allFilesAccepted = this.allFilesAccepted(Array.prototype.slice.call(dataTransferItems));

    this.setState({
      isDragActive: allFilesAccepted,
      isDragReject: !allFilesAccepted
    });

    if (this.props.onDragEnter) {
      this.props.onDragEnter.call(this, e);
    }
  }

  onDragOver(e) {
    e.preventDefault();
    e.stopPropagation();
    return false;
  }

  onDragLeave(e) {
    e.preventDefault();

    // Only deactivate once the dropzone and all children was left.
    if (--this.enterCounter > 0) {
      return;
    }

    this.setState({
      isDragActive: false,
      isDragReject: false
    });

    if (this.props.onDragLeave) {
      this.props.onDragLeave.call(this, e);
    }
  }

  onDrop(e) {
    e.preventDefault();

    // Reset the counter along with the drag on a drop.
    this.enterCounter = 0;

    this.setState({
      isDragActive: false,
      isDragReject: false
    });

    const droppedFiles = e.dataTransfer ? e.dataTransfer.files : e.target.files;
    const max = this.props.multiple ? droppedFiles.length : Math.min(droppedFiles.length, 1);
    const files = [];

    for (let i = 0; i < max; i++) {
      const file = droppedFiles[i];
      // We might want to disable the preview creation to support big files
      if (!this.props.disablePreview) {
        file.preview = window.URL.createObjectURL(file);
      }
      files.push(file);
    }

    if (this.props.onDrop) {
      this.props.onDrop.call(this, files, e);
    }

    if (this.allFilesAccepted(files)) {
      if (this.props.onDropAccepted) {
        this.props.onDropAccepted.call(this, files, e);
      }
    } else {
      if (this.props.onDropRejected) {
        this.props.onDropRejected.call(this, files, e);
      }
    }
  }

  onClick() {
    if (!this.props.disableClick) {
      this.open();
    }
  }

  allFilesAccepted(files) {
    return files.every(file => accepts(file, this.props.accept));
  }

  open() {
    this.fileInputEl.value = null;
    this.fileInputEl.click();
  }

  render() {
	
	let accept;
	let activeClassName;
	let inputProps;
	let  multiple;
	let rejectClassName;
	let rest;

	let className;
	let rejectStyle;
	let style;
	let activeStyle;

	let propAttributes = {
      accept,
      activeClassName,
      inputProps,
      multiple,
      name,
      rejectClassName,
      rest
    } = this.props;

    const { isDragActive, isDragReject } = this.state;

    className = className || '';

    if (isDragActive && activeClassName) {
      className += ' ' + activeClassName;
    }
    if (isDragReject && rejectClassName) {
      className += ' ' + rejectClassName;
    }

    if (!className && !style && !activeStyle && !rejectStyle) {
      style = {

      };
      activeStyle = {

      };
      rejectStyle = {
        borderStyle: 'solid',
        backgroundColor: '#ffdddd'
      };
    }

   var appliedStyle;
    if (activeStyle && isDragActive) {
		
      appliedStyle = {
        style,
        activeStyle
      };
    } else if (rejectStyle && isDragReject) {
      appliedStyle = {
        style,
        rejectStyle
      };
    } else {
      appliedStyle = {
        style
      };
    }

   var inputAttributes = [{
      accept:'',
      type: 'file',
      style: { display: 'none' },
      multiple: supportMultiple && multiple,
      ref: el => this.fileInputEl = el,
      onChange: this.onDrop
    }];
	
	var myStyle = {
		display: 'block'
	};

    if (name && name.length) {
      inputAttributes.name = name;
    }
		
	var inputAttr = 
		<div className="container">
			<form role="form" >
				<div className="form-group">
					
						<input className="btn btn-default" accept='' onChange={this.onDrop.bind(this)} ref={el => this.fileInputEl = el} type='file' multiple={supportMultiple && multiple}  />
				
				</div>
			</form>
		</div>
		return (
			<div onClick={this.onClick}  onDragEnter={this.onDragEnter} onDragOver={this.onDragOver} onDragLeave={this.onDragLeave} onDrop={this.onDrop}>
				{inputAttr}
				{this.props.children}
			</div>
		)
  }
}

// FLUX
        /** McFly */

        /** Store */
		var shModal = false;
		
		function setModalState(text){
           shModal = text;
        }

        var ModalStore = Flux.createStore({
			getModal : function(){
				return shModal;
			}
        }, function(payload){
			if(payload.actionType === "SHOW_MODAL") {
				setModalState(payload.text);
                ModalStore.emitChange();
            }
			if(payload.actionType === "SHOW_HELP_MODAL") {
				
				setModalState(payload.text);
                ModalStore.emitChange();
            }
        });

        /** Actions */

        var ModalActions = Flux.createActions({
			showModal: function(text){
               return {
                  actionType: "SHOW_MODAL",
                  text: text
               }
            },
			showHelpModal: function(text){
               return {
                  actionType: "SHOW_HELP_MODAL",
                  text: text
               }
            }
        });

        function getModal(){
		   return {
			   modal : ModalStore.getModal()
           }
        }

        /** Controller View */
		var ModalController = React.createClass({
            mixins: [ModalStore.mixin],
            getInitialState: function(){
                return getModal();
            },
            storeDidChange: function() {
                this.setState(getModal());
            },
            render: function() {
                return <ModalComponent  modal={this.state.modal} />;
            }
        });
		
		var ModalHelpController = React.createClass({
            mixins: [ModalStore.mixin],
            getInitialState: function(){
                return getModal();
            },
            storeDidChange: function() {
                this.setState(getModal());
            },
            render: function() {
                return <ModalHelpComponent imgUrl={this.props.imgUrl} modal={this.state.modal} />;
            }
        });

		/** Component */
       class ModalHelpComponent extends React.Component{
		   
		    constructor(props) {
				super(props);
				this.state = {
					mountedUserHelp: true
				}
			}
			
			componentDidMount() {
				this.setState({ mountedUserHelp: true});
			}
				
			disableWarning(){
				this.setState({ mountedUserHelp: false});
			}
			
			showMyPopup(){
				
				var divStyle = {
					display: 'block'
				}
				var fade = {
					display: 'block'
				}
				
				var popoverStyle = {
				}
				var topStyle = {
				}
			
				return(
					<div  role="tooltip">
						<img src={this.props.imgUrl} onClick={	this.showHelpUserModal.bind(this, true)} className="img img-responsive img-thumbnail" alt="vores logo" />
					</div>
				)
			}
			
			
			showHelpUserModal(visibleModal){
				
				ModalActions.showHelpModal(visibleModal);
			}

            render() {
				var divStyle = {
					display: 'block'
				}
				var fade = {
					display: 'block'
				}
				
				var modalHelpMessage;

				if(this.props.modal == true){
					return(
					modalHelpMessage = 
						<div id="light" className='black_overlay' onClick={this.showHelpUserModal.bind(this, false)} style={divStyle} ClassName='white_content'>
							<div id="fade"  style={fade}>
								<div className="col-md-12  ">
									<div className="modal modal_example" style={fade} onClick={this.showHelpUserModal.bind(this, false)} tabindex="-1" role="dialog">
										<div className="modal-dialog">
											<div className="modal-content">
												<div className="modal-header">
											
													<h4 className="modal-title">
														Billede Eksempel
													</h4>
												</div>
												<div className="modal-body">
													<p>
														<img src={this.props.imgUrl} className="img img-responsive " alt="Hjælp til brugeren omkring valg af banner og slogan"/>
													</p>
												</div>
												<div className="modal-footer">
													<button type="button" className="btn btn-default" data-dismiss="modal">Luk Boksen</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					)
					
				}else{
					return( 
						<div>
							{ this.state.mountedUserHelp  ? this.showMyPopup(): null }
						</div>
					)
				}
				
                return (
					<div className="container-fluid">
						<div className="row">		
							{modalHelpMessage}	
						</div>
					</div>
                )
            }
        };
		
		
		
        /** Component */
       class ModalComponent extends React.Component{
		   
		    constructor(props) {
				super(props);
				this.state = {
					mounted: true
				}
			}
			
			componentDidMount() {
				this.setState({ mounted: true});
			}
				
			disableWarning(){
				this.setState({ mounted: false});
			}
			
			showMyPopup(){
				
				var divStyle = {
					display: 'block'
				}
				var fade = {
					display: 'block'
				}
				
				var popoverStyle = {
					display: 'block',
					top: '26px',
					left: '232.167px'
				}
				var topStyle = {
					top: "50%"
				}
				return(
					<div style={popoverStyle}  id="popover423043" className="popover fade right in" role="tooltip">
						
						<div style={topStyle} className="arrow">
						
						
						</div>
					
						<h3 className="popover-title">
							Rettigheder
							<button aria-label="Close" data-dismiss="modal" onClick={	this.disableWarning.bind(this)} class="close" type="button"><span aria-hidden="true">×</span></button>
							
							</h3>
						<div className="popover-content">
							<button className="btn btn-info" onClick={	this.showModal.bind(this, true)} >
								Hvad betyder Rettigheder?
							</button>
						</div>
					</div>
				)
			}
			
			
			showModal(visibleModal){
				
				RecipeActions.showModal(visibleModal);
			}

            render() {
				var divStyle = {
					display: 'block'
				}
				var fade = {
					display: 'block'
				}
				
				var modalMessage;
				
		
				if(this.props.modal == true){
					
					return(
					
					modalMessage = 
						<div id="light" className='black_overlay' onClick={this.showModal.bind(this, false)} style={divStyle} ClassName='white_content'>
							<div id="fade"  style={fade}>
								<div className="col-md-3 sidebar-optionpaneltop ">
									<div className="modal modal_example" style={fade} onClick={this.showModal.bind(this, false)} tabindex="-1" role="dialog">
										<div className="modal-dialog">
											<div className="modal-content">
												<div className="modal-header">
													<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
													<h4 className="modal-title">
														Advarsel - Copyright / Rettigheder
													</h4>
												</div>
												<div className="modal-body">
													<p>
														Hej - Vi skal g&oslash;re opmærksom på, at det er strengt ulovligt, at benytte eller uploade billeder som man ikke har tilladelse til at bruge. Copyright! Denne side fraskriver sig hermed et hvert (med)ansvar for brugen af andres værker.	
													</p>
												</div>
												<div className="modal-footer">
													<a type="button" className="btn btn-info" href="http://kum.dk/kulturpolitik/ophavsret/billedkunst-og-fotografier/" target="_blank" data-dismiss="modal">Læs mere</a>
													<button type="button" className="btn btn-default" data-dismiss="modal">Luk Boksen</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					)
					
				}else{
					return( 
						<div>
						
						
							{ this.state.mounted  ? this.showMyPopup(): null }
						</div>
					)
				}
				
                return (
					<div className="container-fluid">
						<div className="row">
							
							{modalMessage}
							
								
							
							
						</div>
					</div>
                )
            }
        };

class DropzoneDemo extends React.Component{
	constructor (props){
		super(props);
		
		this.state = {
			files: []
			
		}
	}
	onDrop(files) {
		
      this.setState({
        files: files
      });
    }

    onOpenClick() {
      this.refs.dropzone.open();
    }
  
	render(){

		return ( 
            <div>
                <Dropzone ref="dropzone" onDrop={this.onDrop.bind(this)}>
                  
                </Dropzone>
				
                {this.state.files.length > 0 ? <div>
					<div>
						{this.state.files.map((file) => <img className='img img-responsive' src={file.preview} /> )}
						
						<ModalController />
					</div>
                </div> 
				: null}
            </div>
        )
			
	}
}

Dropzone.defaultProps = {
  disablePreview: false,
  disableClick: false,
  multiple: true
};

Dropzone.propTypes = {
  onDrop: React.PropTypes.func,
  onDropAccepted: React.PropTypes.func,
  onDropRejected: React.PropTypes.func,
  onDragEnter: React.PropTypes.func,
  onDragLeave: React.PropTypes.func,

  children: React.PropTypes.node,
  style: React.PropTypes.object,
  activeStyle: React.PropTypes.object,
  rejectStyle: React.PropTypes.object,
  className: React.PropTypes.string,
  activeClassName: React.PropTypes.string,
  rejectClassName: React.PropTypes.string,

  disablePreview: React.PropTypes.bool,
  disableClick: React.PropTypes.bool,

  inputProps: React.PropTypes.object,
  multiple: React.PropTypes.bool,
  accept: React.PropTypes.string,
  name: React.PropTypes.string
};

//export default Dropzone;
	
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