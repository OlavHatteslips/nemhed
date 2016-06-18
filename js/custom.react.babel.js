'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CSSTransitionGroup = React.addons.CSSTransitionGroup;
var INTERVAL = 2000;

var MenuComponent = function (_React$Component) {
	_inherits(MenuComponent, _React$Component);

	function MenuComponent(props) {
		_classCallCheck(this, MenuComponent);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MenuComponent).call(this, props));

		_this.state = {
			items: [],
			children: ['Forside', 'Hvorfor?', 'Hvem er vi?', 'Opret din side'],
			mounted: false
		};
		return _this;
	}

	_createClass(MenuComponent, [{
		key: 'componentDidMount',
		value: function componentDidMount() {

			this.setState({ mounted: true });
		}
	}, {
		key: 'handleAdd',
		value: function handleAdd() {
			var newItems = this.state.items.concat([prompt('Enter some text')]);
			this.setState({ items: newItems });
		}
	}, {
		key: 'render',
		value: function render() {
			var menuLinks;
			if (this.state.mounted) {
				menuLinks = React.createElement(MyLinks, null);
			}

			return React.createElement(
				'div',
				{ className: 'blog-masthead header  headercolor blog-nav   navbar-inverse  navbar  navbar-fixed-top' },
				React.createElement(
					'div',
					{ className: 'container' },
					React.createElement(
						'div',
						{ className: 'navbar-header' },
						React.createElement(
							'button',
							{ type: 'button', className: 'navbar-toggle', 'data-toggle': 'collapse', 'data-target': '#myNavbar' },
							React.createElement('span', { className: 'icon-bar' }),
							React.createElement('span', { className: 'icon-bar' }),
							React.createElement('span', { className: 'icon-bar' })
						),
						React.createElement(
							'a',
							{ href: 'index.html' },
							React.createElement('img', { src: './img/logo/logo.png', className: ' img img-responsive navbar-brand', alt: 'logo' })
						)
					),
					React.createElement(
						'div',
						{ 'class': 'collapse navbar-collapse', id: 'myNavbar' },
						menuLinks
					)
				)
			);
		}
	}]);

	return MenuComponent;
}(React.Component);

var JumbotronComponent = function (_React$Component2) {
	_inherits(JumbotronComponent, _React$Component2);

	function JumbotronComponent(props) {
		_classCallCheck(this, JumbotronComponent);

		var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(JumbotronComponent).call(this, props));

		_this2.state = {
			items: [],
			mounted: false,
			jumbotronTitle: ['Vælg et logo eller banner?']

		};
		return _this2;
	}

	_createClass(JumbotronComponent, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.setState({ mounted: true });
		}
	}, {
		key: 'handleAdd',
		value: function handleAdd() {
			var newItems = this.state.jumbotronTitle.concat([prompt('Enter some text')]);
			this.setState({ jumbotronTitle: newItems });
		}
	}, {
		key: 'render',
		value: function render() {

			var jumbotronTitle;

			if (this.state.mounted) {
				jumbotronTitle = this.state.jumbotronTitle.map(function (jumbotronTitle, i) {
					return React.createElement(
						'div',
						{ className: 'container ', href: '#', key: jumbotronTitle },
						React.createElement(
							'h1',
							null,
							jumbotronTitle
						),
						React.createElement(
							'p',
							null,
							'Sådan gør du...'
						)
					);
				}.bind(this));
			}

			return React.createElement(
				'div',
				null,
				jumbotronTitle
			);
		}
	}]);

	return JumbotronComponent;
}(React.Component);

var JumbotronMenuComponent = function (_React$Component3) {
	_inherits(JumbotronMenuComponent, _React$Component3);

	function JumbotronMenuComponent(props) {
		_classCallCheck(this, JumbotronMenuComponent);

		var _this3 = _possibleConstructorReturn(this, Object.getPrototypeOf(JumbotronMenuComponent).call(this, props));

		_this3.state = {
			items: [],
			mounted: false,
			jumbotronTitle: ['Hvor vil du have placeret din menu?']
		};
		return _this3;
	}

	_createClass(JumbotronMenuComponent, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.setState({ mounted: true });
		}
	}, {
		key: 'handleAdd',
		value: function handleAdd() {
			var newItems = this.state.jumbotronTitle.concat([prompt('Enter some text')]);
			this.setState({ jumbotronTitle: newItems });
		}
	}, {
		key: 'render',
		value: function render() {

			var jumbotronTitle;

			if (this.state.mounted) {
				jumbotronTitle = this.state.jumbotronTitle.map(function (jumbotronTitle, i) {

					React.createElement(
						'div',
						{ className: 'container-fluid ', href: '#', key: jumbotronTitle },
						React.createElement(
							'h1',
							null,
							jumbotronTitle
						),
						React.createElement(
							'p',
							null,
							'Sådan gør du...'
						)
					);
				}.bind(this));
			}

			return React.createElement(
				'div',
				{ className: ' jumbotron jumbotroncolors  text-center' },
				jumbotronTitle
			);
		}
	}]);

	return JumbotronMenuComponent;
}(React.Component);

var JumbotronFooterComponent = function (_React$Component4) {
	_inherits(JumbotronFooterComponent, _React$Component4);

	function JumbotronFooterComponent(props) {
		_classCallCheck(this, JumbotronFooterComponent);

		var _this4 = _possibleConstructorReturn(this, Object.getPrototypeOf(JumbotronFooterComponent).call(this, props));

		_this4.state = {
			mounted: false,
			jumbotronTitle: ['Hvad vil du have placeret i din sidefod?']

		};
		return _this4;
	}

	_createClass(JumbotronFooterComponent, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.setState({ mounted: true });
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {}
	}, {
		key: 'render',
		value: function render() {

			var jumbotronTitle;
			if (this.state.mounted) {
				jumbotronTitle = this.state.jumbotronTitle.map(function (jumbotronTitle, i) {
					return React.createElement(
						'div',
						{ className: 'container-fluid ', href: '#', key: jumbotronTitle },
						React.createElement(
							'h1',
							null,
							jumbotronTitle
						),
						React.createElement(
							'p',
							null,
							'Sådan gør du...'
						)
					);
				}.bind(this));
			}

			return React.createElement(
				'div',
				{ className: ' jumbotron jumbotroncolors  text-center' },
				jumbotronTitle
			);
		}
	}]);

	return JumbotronFooterComponent;
}(React.Component);

var JumbotronUserContentComponent = function (_React$Component5) {
	_inherits(JumbotronUserContentComponent, _React$Component5);

	function JumbotronUserContentComponent(props) {
		_classCallCheck(this, JumbotronUserContentComponent);

		var _this5 = _possibleConstructorReturn(this, Object.getPrototypeOf(JumbotronUserContentComponent).call(this, props));

		_this5.state = {
			mounted: false,
			jumbotronTitle: ['Vælg typen af indhold']
		};
		return _this5;
	}

	_createClass(JumbotronUserContentComponent, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.setState({ mounted: true });
		}
	}, {
		key: 'render',
		value: function render() {
			var jumbotronTitle;

			if (this.state.mounted) {
				jumbotronTitle = this.state.jumbotronTitle.map(function (jumbotronTitle, i) {
					return React.createElement(
						'div',
						{ className: 'container-fluid ', href: '#', key: jumbotronTitle },
						React.createElement(
							'h1',
							null,
							jumbotronTitle
						),
						React.createElement(
							'p',
							null,
							'Sådan gør du...'
						)
					);
				}.bind(this));
			}

			return React.createElement(
				'div',
				{ className: ' jumbotron jumbotroncolors  text-center' },
				jumbotronTitle
			);
		}
	}]);

	return JumbotronUserContentComponent;
}(React.Component);

var ContentComponent = function (_React$Component6) {
	_inherits(ContentComponent, _React$Component6);

	function ContentComponent(props) {
		_classCallCheck(this, ContentComponent);

		var _this6 = _possibleConstructorReturn(this, Object.getPrototypeOf(ContentComponent).call(this, props));

		_this6.state = {
			items: ["row", "col-md-6", "panel", "panel-body", "text-center", "iframe"],
			mounted: false,
			mountedInfo: false,
			videoLink: ['https://www.youtube.com/embed/p-xGhskA2F0?html5=1'],
			videoMenuLink: ['https://www.youtube.com/embed/ngqakAN1KGI?html5=1'],
			value: "banner",
			bval: "logo",
			showNextQuestion: false,
			sloganQuestion: false,
			sloganText: '',
			footerText: '',
			showPreview: false,
			logoUrl: '',
			mountedFrontpage: false,
			jumbotronWelcomeTitle: 'Velkommen til Nemhed',
			startSetup: false,
			logoBannerSelected: false,
			bannerMounted: false,
			createMenu: false,
			createBannerMenu: false,
			createContent: false,
			menuSelected: 0,
			menuBannerSelected: 0,
			displayBannerImgBtn: true,
			footerSelected: 0,
			contentSelected: 0,
			createFooter: false,
			createFooterOrdinary: false,
			downloadLink: '',
			NextContentQuestion: false,
			menuItem: [],
			contentType: ''

		};
		//var results = this.props.results;
		return _this6;
	}

	_createClass(ContentComponent, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.setState({ mounted: true });
		}
	}, {
		key: 'handleAdd',
		value: function handleAdd() {
			var newItems = this.state.videoLink.concat([prompt('Enter some text')]);
			this.setState({ videoLink: newItems });
		}
	}, {
		key: 'basedOnSloganNo',
		value: function basedOnSloganNo() {
			this.setState({ mounted: false });
		}
	}, {
		key: 'basedOnSloganYes',
		value: function basedOnSloganYes() {
			this.setState({ sloganQuestion: true });
		}
	}, {
		key: 'bindPreview',
		value: function bindPreview() {
			this.setState({ showPreview: true });
		}
	}, {
		key: 'handleAddSloganText',
		value: function handleAddSloganText() {
			var newItems = this.state.sloganText.concat([prompt('Enter some text')]);
			this.setState({ sloganText: newItems });
		}
	}, {
		key: 'handleAddFooterText',
		value: function handleAddFooterText() {
			var newItems = this.state.footerText.concat([prompt('Enter some text')]);
			this.setState({ footerText: newItems });
		}
	}, {
		key: 'addMenuArea',
		value: function addMenuArea() {

			var menuItems = this.state.menuItem.concat([prompt('Indtast Menupunkt')]);
			this.setState({ menuItem: menuItems });
		}
	}, {
		key: 'removeImageWarning',
		value: function removeImageWarning() {
			this.setState({ alertLogoImageCopyright: false });
		}
	}, {
		key: 'GoToLogoBannerChoice',
		value: function GoToLogoBannerChoice() {
			this.setState({
				logoBannerSelected: false,
				mounted: true,
				showPreview: false,
				sloganQuestion: false,
				showNextQuestion: false
			});
		}
	}, {
		key: 'downloadHTML',
		value: function downloadHTML(htmlArgs) {
			return htmlArgs;
		}
	}, {
		key: 'showDownloadLink',
		value: function showDownloadLink() {
			return React.createElement(
				'p',
				null,
				this.state.downloadLink
			);
		}
	}, {
		key: 'showMenu',
		value: function showMenu() {

			return React.createElement(
				'div',
				{ className: 'alert alert-danger alert-dismissible fade in', role: 'alert' },
				'show something'
			);
		}
	}, {
		key: 'GoToFrontpage',
		value: function GoToFrontpage() {
			this.setState({ startSetup: false });
		}
	}, {
		key: 'GoToCreateMenu',
		value: function GoToCreateMenu() {
			this.setState({ createMenu: true });
			this.setState({ showPreview: false });
		}
	}, {
		key: 'GoToCreateFooter',
		value: function GoToCreateFooter() {
			this.setState({ createFooter: true });
			this.setState({ showPreview: false });
			this.setState({ bannerMounted: true });
			this.setState({ createBannerMenu: false });
		}
	}, {
		key: 'GoToCreateFooterOrdinary',
		value: function GoToCreateFooterOrdinary() {
			this.setState({ createFooterOrdinary: true });
			this.setState({ showPreview: false });
			this.setState({ bannerMounted: false });
			this.setState({ createBannerMenu: false });
		}
	}, {
		key: 'GoToCreateContent',
		value: function GoToCreateContent() {
			this.setState({ createContent: true });
			this.setState({ showPreview: false });

			this.setState({ createBannerMenu: false });
			this.setState({ createFooter: false });
			this.setState({ createMenu: false });
		}
	}, {
		key: 'GoToCreateBannerMenu',
		value: function GoToCreateBannerMenu() {
			this.setState({ createBannerMenu: true });
			this.setState({ showPreview: false });
			this.setState({ bannerMounted: false });
		}
	}, {
		key: 'GoToMenuChoice',
		value: function GoToMenuChoice() {
			this.setState({ createMenu: false });
			this.setState({ showPreview: true });
			this.setState({ menuSelected: 0 });
		}
	}, {
		key: 'menuChoice',
		value: function menuChoice(choice_param) {
			this.setState({ createMenu: false });
			this.setState({ menuSelected: choice_param });
			this.setState({ showPreview: true });
		}
	}, {
		key: 'footerChoice',
		value: function footerChoice(choice_param) {
			this.setState({ createFooter: false });
			this.setState({ footerSelected: choice_param });
			this.setState({ showPreview: false });
			this.setState({ bannerMounted: true });
		}
	}, {
		key: 'footerChoiceOrdinary',
		value: function footerChoiceOrdinary(choice_param) {
			this.setState({ createFooter: false });
			this.setState({ footerSelected: choice_param });
			this.setState({ showPreview: true });
			this.setState({ bannerMounted: false });
			this.setState({ createFooterOrdinary: false });
		}
	}, {
		key: 'contentChoice',
		value: function contentChoice(choice_param) {
			this.setState({
				NextContentQuestion: true,
				contentType: choice_param,
				showPreview: false
			});
		}
	}, {
		key: 'contentChoiceTwo',
		value: function contentChoiceTwo(choice_param_s) {
			this.setState({ createContent: false });
			this.setState({ showPreview: true });
			this.setState({ contentSelected: choice_param_s });
		}
	}, {
		key: 'GoToMenuBannerChoice',
		value: function GoToMenuBannerChoice() {
			this.setState({ createBannerMenu: false });
			this.setState({ showPreview: false });
			this.setState({ menuBannerSelected: 0 });
		}
	}, {
		key: 'menuBannerChoice',
		value: function menuBannerChoice(choice_param) {
			this.setState({ createBannerMenu: false });
			this.setState({ menuBannerSelected: choice_param });
			this.setState({ showPreview: true });
			this.setState({ bannerMounted: true });
		}
	}, {
		key: 'insertMenuQuestions',
		value: function insertMenuQuestions() {

			var progressStyle = {
				width: '10%'
			};

			return React.createElement(
				'div',
				{ id: 'rowID', className: ' ', key: "rowMenu" },
				React.createElement(ProgBar, { progText: 'Trin 2 / 4 - Menu placering', width: 40 }),
				React.createElement(JumbotronMenuComponent, null),
				React.createElement(
					'div',
					{ key: "colmdMenu6", className: 'col-md-6 ' },
					React.createElement(
						'div',
						{ className: 'panel ', key: "panel" },
						React.createElement(
							'div',
							{ className: 'panel-body', id: 'panelVideoId', key: "panelVideoBodyMenu" },
							React.createElement(
								'p',
								{ className: 'text-center', key: "textCenterMenu" },
								React.createElement('iframe', { src: this.state.videoMenuLink })
							)
						)
					)
				),
				React.createElement(
					'div',
					{ className: 'col-md-6', key: 7 },
					React.createElement(
						'div',
						{ className: 'panel ', key: "videoLinkMenu" },
						React.createElement(
							'h2',
							null,
							'Hvor vil du have din menu-linje placeret?'
						),
						React.createElement(
							'form',
							null,
							React.createElement(
								'p',
								{ className: 'form-group' },
								React.createElement(
									'label',
									{ className: 'radio-inline' },
									React.createElement('input', { type: 'radio', name: 'inlineRadioOptions', id: 'QuestionTwoMenuOverHeader', value: '1', onClick: this.menuChoice.bind(this, 1) }),
									' Over Logo\'et'
								)
							),
							React.createElement(
								'p',
								{ className: 'form-group' },
								React.createElement(
									'label',
									{ className: 'radio-inline' },
									React.createElement('input', { type: 'radio', name: 'inlineRadioOptions', id: 'QuestionTwoMenuRight', value: '2', onClick: this.menuChoice.bind(this, 2) }),
									' I højre side af siden'
								)
							),
							React.createElement(
								'p',
								{ className: 'form-group' },
								React.createElement(
									'label',
									{ className: 'radio-inline' },
									React.createElement('input', { type: 'radio', name: 'inlineRadioOptions', id: 'QuestionTwoMenuUnderHeader', value: '3', onClick: this.menuChoice.bind(this, 3) }),
									' Under logo\'et'
								)
							)
						)
					)
				)
			);
		}
	}, {
		key: 'contentQuestionTwo',
		value: function contentQuestionTwo() {
			var progressStyle = {
				width: '60%'
			};
			return React.createElement(
				'div',
				null,
				React.createElement(
					'h2',
					null,
					'Hvor mange kolonner ønsker du?'
				),
				React.createElement(
					'form',
					null,
					React.createElement(
						'p',
						{ className: 'form-group' },
						React.createElement(
							'label',
							{ className: 'radio-inline' },
							React.createElement('input', { type: 'radio', name: 'inlineRadioOptions', id: 'QuestionTwoMenuOverHeader', value: '1', onClick: this.contentChoiceTwo.bind(this, 1) }),
							' 1'
						)
					),
					React.createElement(
						'p',
						{ className: 'form-group' },
						React.createElement(
							'label',
							{ className: 'radio-inline' },
							React.createElement('input', { type: 'radio', name: 'inlineRadioOptions', id: 'QuestionTwoMenuRight', value: '2', onClick: this.contentChoiceTwo.bind(this, 2) }),
							' 2'
						)
					),
					React.createElement(
						'p',
						{ className: 'form-group' },
						React.createElement(
							'label',
							{ className: 'radio-inline' },
							React.createElement('input', { type: 'radio', name: 'inlineRadioOptions', id: 'QuestionThreeMenuRight', value: '3', onClick: this.contentChoiceTwo.bind(this, 3) }),
							' 3'
						)
					)
				)
			);
		}
	}, {
		key: 'insertContentQuestions',
		value: function insertContentQuestions() {

			var progressStyle = {
				width: '60%'
			};

			return React.createElement(
				'div',
				{ id: 'rowID', className: ' ', key: "rowMenu" },
				React.createElement(ProgBar, { progText: 'Trin 3 / 4 - Valg af indhold', width: 60 }),
				React.createElement(JumbotronUserContentComponent, null),
				React.createElement(
					'div',
					{ key: "colmdMenu6", className: 'col-md-6 ' },
					React.createElement(
						'div',
						{ className: 'panel ', key: "panel" },
						React.createElement(
							'div',
							{ className: 'panel-body', id: 'panelVideoId', key: "panelVideoBodyMenu" },
							React.createElement(
								'p',
								{ className: 'text-center', key: "textCenterMenu" },
								React.createElement('iframe', { src: this.state.videoLink })
							)
						)
					)
				),
				React.createElement(
					'div',
					{ className: 'col-md-6', key: 7 },
					React.createElement(
						'div',
						{ className: 'panel ', key: "videoLinkMenu" },
						React.createElement(
							'h2',
							null,
							'Hvordan skal indholdet på din side være ?'
						),
						React.createElement(
							'form',
							null,
							React.createElement(
								'p',
								{ className: 'form-group' },
								React.createElement(
									'label',
									{ className: 'radio-inline' },
									React.createElement('input', { type: 'radio', name: 'inlineRadioOptions', id: 'QuestionTwoMenuOverHeader', value: '1', onClick: this.contentChoice.bind(this, 'text') }),
									' Kun Tekst'
								)
							),
							React.createElement(
								'p',
								{ className: 'form-group' },
								React.createElement(
									'label',
									{ className: 'radio-inline' },
									React.createElement('input', { type: 'radio', name: 'inlineRadioOptions', id: 'QuestionTwoMenuRight', value: '2', onClick: this.contentChoice.bind(this, 'imgText') }),
									' Tekst & Billeder'
								)
							)
						),
						this.state.NextContentQuestion ? this.contentQuestionTwo() : null
					)
				)
			);
		}
	}, {
		key: 'insertFooterQuestions',
		value: function insertFooterQuestions() {

			var progressStyle = {
				width: '60%'
			};

			return React.createElement(
				'div',
				{ id: 'rowID', className: ' ', key: "rowMenu" },
				React.createElement(ProgBar, { progText: 'Trin 4 / 4 - Placering af sidefod', width: 80 }),
				React.createElement(JumbotronFooterComponent, null),
				React.createElement(
					'div',
					{ key: "colmdMenu6", className: 'col-md-6 ' },
					React.createElement(
						'div',
						{ className: 'panel ', key: "panel" },
						React.createElement(
							'div',
							{ className: 'panel-body', id: 'panelVideoId', key: "panelVideoBodyMenu" },
							React.createElement(
								'p',
								{ className: 'text-center', key: "textCenterMenu" },
								React.createElement('iframe', { src: this.state.videoLink })
							)
						)
					)
				),
				React.createElement(
					'div',
					{ className: 'col-md-6', key: 7 },
					React.createElement(
						'div',
						{ className: 'panel ', key: "videoLinkMenu" },
						React.createElement(
							'h2',
							null,
							'Hvor vil du have i din sidefod ?'
						),
						React.createElement(
							'form',
							null,
							React.createElement(
								'p',
								{ className: 'form-group' },
								React.createElement(
									'label',
									{ className: 'radio-inline' },
									React.createElement('input', { type: 'radio', name: 'inlineRadioOptions', id: 'QuestionTwoMenuOverHeader', value: '1', onClick: this.footerChoice.bind(this, 1) }),
									' En copyright tekst'
								)
							),
							React.createElement(
								'p',
								{ className: 'form-group' },
								React.createElement(
									'label',
									{ className: 'radio-inline' },
									React.createElement('input', { type: 'radio', name: 'inlineRadioOptions', id: 'QuestionTwoMenuRight', value: '2', onClick: this.footerChoice.bind(this, 2) }),
									' Tilmelding til nyhedsbrev'
								)
							),
							React.createElement(
								'p',
								{ className: 'form-group' },
								React.createElement(
									'label',
									{ className: 'radio-inline' },
									React.createElement('input', { type: 'radio', name: 'inlineRadioOptions', id: 'QuestionTwoMenuUnderHeader', value: '3', onClick: this.footerChoice.bind(this, 3) }),
									' En knap til feedback'
								)
							)
						)
					)
				)
			);
		}
	}, {
		key: 'insertFooterQuestionsOrdinary',
		value: function insertFooterQuestionsOrdinary() {

			var progressStyle = {
				width: '60%'
			};

			return React.createElement(
				'div',
				{ id: 'rowID', className: ' ', key: "rowMenu" },
				React.createElement(ProgBar, { progText: 'Trin 4 / 4 - Placering af sidefod', width: 80 }),
				React.createElement(JumbotronFooterComponent, null),
				React.createElement(
					'div',
					{ key: "colmdMenu6", className: 'col-md-6 ' },
					React.createElement(
						'div',
						{ className: 'panel ', key: "panel" },
						React.createElement(
							'div',
							{ className: 'panel-body', id: 'panelVideoId', key: "panelVideoBodyMenu" },
							React.createElement(
								'p',
								{ className: 'text-center', key: "textCenterMenu" },
								React.createElement('iframe', { src: this.state.videoLink })
							)
						)
					)
				),
				React.createElement(
					'div',
					{ className: 'col-md-6', key: 7 },
					React.createElement(
						'div',
						{ className: 'panel ', key: "videoLinkMenu" },
						React.createElement(
							'h2',
							null,
							'Hvor vil du have i din sidefod ?'
						),
						React.createElement(
							'form',
							null,
							React.createElement(
								'p',
								{ className: 'form-group' },
								React.createElement(
									'label',
									{ className: 'radio-inline' },
									React.createElement('input', { type: 'radio', name: 'inlineRadioOptions', id: 'QuestionTwoMenuOverHeader', value: '1', onClick: this.footerChoiceOrdinary.bind(this, 1) }),
									' En copyright tekst'
								)
							),
							React.createElement(
								'p',
								{ className: 'form-group' },
								React.createElement(
									'label',
									{ className: 'radio-inline' },
									React.createElement('input', { type: 'radio', name: 'inlineRadioOptions', id: 'QuestionTwoMenuRight', value: '2', onClick: this.footerChoiceOrdinary.bind(this, 2) }),
									' Tilmelding til nyhedsbrev'
								)
							),
							React.createElement(
								'p',
								{ className: 'form-group' },
								React.createElement(
									'label',
									{ className: 'radio-inline' },
									React.createElement('input', { type: 'radio', name: 'inlineRadioOptions', id: 'QuestionTwoMenuUnderHeader', value: '3', onClick: this.footerChoiceOrdinary.bind(this, 3) }),
									' En knap til feedback'
								)
							)
						)
					)
				)
			);
		}
	}, {
		key: 'insertBannerMenuQuestions',
		value: function insertBannerMenuQuestions() {
			return React.createElement(
				'div',
				{ id: 'rowID', className: ' ', key: "rowMenu" },
				React.createElement(JumbotronMenuComponent, null),
				React.createElement(
					'div',
					{ key: "colmdMenu6", className: 'col-md-6 ' },
					React.createElement(
						'div',
						{ className: 'panel ', key: "panel" },
						React.createElement(
							'div',
							{ className: 'panel-body', id: 'panelVideoId', key: "panelVideoBodyMenu" },
							React.createElement(
								'p',
								{ className: 'text-center', key: "textCenterMenu" },
								React.createElement('iframe', { src: this.state.videoMenuLink })
							)
						)
					)
				),
				React.createElement(
					'div',
					{ className: 'col-md-6', key: 7 },
					React.createElement(
						'div',
						{ className: 'panel ', key: "videoLinkMenu" },
						React.createElement(
							'h2',
							null,
							'Hvor vil du have din Menu placeret? dfdf'
						),
						React.createElement(
							'form',
							null,
							React.createElement(
								'p',
								{ className: 'form-group' },
								React.createElement(
									'label',
									{ className: 'radio-inline' },
									React.createElement('input', { type: 'radio', name: 'inlineRadioOptions', id: 'QuestionTwoMenuOverHeader', value: '1', onClick: this.menuBannerChoice.bind(this, 1) }),
									' Over Logo\'et'
								)
							),
							React.createElement(
								'p',
								{ className: 'form-group' },
								React.createElement(
									'label',
									{ className: 'radio-inline' },
									React.createElement('input', { type: 'radio', name: 'inlineRadioOptions', id: 'QuestionTwoMenuRight', value: '2', onClick: this.menuBannerChoice.bind(this, 2) }),
									' I højre side af siden'
								)
							),
							React.createElement(
								'p',
								{ className: 'form-group' },
								React.createElement(
									'label',
									{ className: 'radio-inline' },
									React.createElement('input', { type: 'radio', name: 'inlineRadioOptions', id: 'QuestionTwoMenuUnderHeader', value: '3', onClick: this.menuBannerChoice.bind(this, 3) }),
									' Under logo\'et'
								)
							)
						)
					)
				)
			);
		}
	}, {
		key: 'changeStateOfMount',
		value: function changeStateOfMount() {
			this.setState({
				mounted: false,
				showPreview: true,
				logoBannerSelected: true
			});
		}
	}, {
		key: 'insertContentBox',
		value: function insertContentBox() {
			return React.createElement(ContentBar, { logoUrl: this.state.logoUrl, choiceOfContent: this.state.contentType, boxes: this.state.contentSelected });
		}
	}, {
		key: 'insertUserOptionsMenu',
		value: function insertUserOptionsMenu() {
			return React.createElement(
				'div',
				{ key: "colmdOptionsShowUserOption", className: ' col-md-12  col-sm-12   sidebar-optionpanel  ' },
				React.createElement(
					'a',
					{ href: '#', className: 'btn btn-default', onClick: this.GoToLogoBannerChoice.bind(this) },
					'Tilbage til valg af logo eller banner'
				),
				React.createElement(
					'a',
					{ href: '#', className: 'btn btn-success', onClick: this.GoToCreateMenu.bind(this) },
					'Placer En Menu'
				)
			);
		}
	}, {
		key: 'insertUserOptionsBannerMenu',
		value: function insertUserOptionsBannerMenu() {
			return React.createElement(
				'div',
				{ key: "colmdOptionsShowUserOption", className: ' col-md-12  col-sm-12   sidebar-optionpanel  ' },
				React.createElement(
					'a',
					{ href: '#', className: 'btn btn-default', onClick: this.GoToLogoBannerChoice.bind(this) },
					'Tilbage til valg af logo eller banner'
				),
				React.createElement(
					'a',
					{ href: '#', className: 'btn btn-success', onClick: this.GoToCreateBannerMenu.bind(this) },
					'Placer En Menu'
				)
			);
		}
	}, {
		key: 'insertUserOptionsContent',
		value: function insertUserOptionsContent() {
			if (this.state.createContent) {

				return React.createElement(
					'div',
					{ key: "colmdOptionsContentShow", className: ' col-md-12  col-sm-12   sidebar-optionpanel  ' },
					React.createElement(
						'a',
						{ href: '#', className: 'btn btn-default', onClick: this.GoToLogoBannerChoice.bind(this) },
						'Tilbage til valg af logo eller banner'
					),
					React.createElement(
						'a',
						{ href: '#', className: 'btn btn-success', onClick: this.GoToCreateContent.bind(this) },
						'Placer dit indhold'
					)
				);
			} else {
				return React.createElement(
					'div',
					{ key: "colmdOptionsContentShowTest", className: ' col-md-12  col-sm-12   sidebar-optionpanel  ' },
					React.createElement(
						'p',
						null,
						'Beklager - du har indsat dit indhold'
					)
				);
			}
		}
	}, {
		key: 'insertUserOptionsFooter',
		value: function insertUserOptionsFooter() {
			return React.createElement(
				'div',
				{ key: "colmdOptionsFooterShow", className: ' col-md-12  col-sm-12   sidebar-optionpanel  ' },
				React.createElement(
					'a',
					{ href: '#', className: 'btn btn-default', onClick: this.GoToLogoBannerChoice.bind(this) },
					'Tilbage til valg af logo eller banner'
				),
				React.createElement(
					'a',
					{ href: '#', className: 'btn btn-success', onClick: this.GoToCreateFooter.bind(this) },
					'Placer En Sidefod'
				)
			);
		}
	}, {
		key: 'insertUserOptionsDefault',
		value: function insertUserOptionsDefault() {
			return React.createElement(
				'div',
				{ key: "colmdOptionsFooterShow", className: ' col-md-12  col-sm-12   sidebar-optionpanel  ' },
				React.createElement(
					'a',
					{ href: '#', className: 'btn btn-default', onClick: this.GoToLogoBannerChoice.bind(this) },
					'Tilbage til valg af logo eller banner'
				),
				React.createElement(
					'a',
					{ href: '#', className: 'btn btn-success', onClick: this.GoToCreateMenu.bind(this) },
					'Placer En Menu'
				),
				React.createElement(
					'a',
					{ href: '#', className: 'btn btn-success', onClick: this.GoToCreateContent.bind(this) },
					'Placer dit indhold'
				),
				React.createElement(
					'a',
					{ href: '#', className: 'btn btn-success', onClick: this.GoToCreateFooter.bind(this) },
					'Placer En Sidefod'
				)
			);
		}
	}, {
		key: 'errorCondition',
		value: function errorCondition() {
			return React.createElement(
				'div',
				{ className: 'alert alert-danger', role: 'alert' },
				React.createElement(
					'a',
					{ href: '#', className: 'alert-link' },
					'Der opstod en fejl'
				)
			);
		}
	}, {
		key: 'previewFix',
		value: function previewFix() {

			var contentPreview;
			var menuObject;
			var menuLinks;

			var menuLinksHorizontal;

			var progressStyle = {
				width: '60%'
			};

			var pageFooter = React.createElement(
				'footer',
				{ className: 'bs-docs-footer', role: 'contentinfo' },
				React.createElement(
					'div',
					{ className: 'container' },
					React.createElement(
						'button',
						{ className: 'btn btn-info', onClick: this.handleAddFooterText.bind(this) },
						'Indsæt Tekst Til Sidefod'
					),
					React.createElement(
						'p',
						null,
						this.state.footerText
					)
				)
			);

			menuLinks = this.state.menuItem.map(function (item, i) {
				return React.createElement(
					'li',
					{ className: 'active' },
					React.createElement(
						'a',
						{ className: ' ', href: '#', key: item },
						item
					)
				);
			}.bind(this));

			menuLinksHorizontal = this.state.menuItem.map(function (item, i) {
				return React.createElement(
					'div',
					null,
					React.createElement(
						'div',
						{ className: 'col-md-3', key: item },
						React.createElement(
							'ul',
							{ className: 'nav nav-pills nav-stacked', key: item },
							React.createElement(
								'li',
								{ className: 'active' },
								React.createElement(
									'a',
									{ href: '#' },
									item
								)
							)
						)
					)
				);
			}.bind(this));

			if (this.state.bannerMounted == false) {

				if (this.state.logoBannerSelected == true && this.state.menuSelected == 0 && this.state.menuBannerSelected == 0) {
					contentPreview = React.createElement(
						'div',
						null,
						React.createElement(
							'div',
							{ id: 'rowID', className: ' row', key: "rowMenuShow" },
							React.createElement(
								'div',
								{ className: 'container-fluid' },
								React.createElement(
									'div',
									{ key: "colmdMenuShow", className: ' col-md-12  col-sm-12   sidebar-left  ' },
									React.createElement(
										'div',
										{ className: ' col-sm-3 col-md-3   ' },
										React.createElement(
											'div',
											{ key: "panel" },
											React.createElement(
												'div',
												{ className: 'text-center', id: 'panelVideoId', key: "panelMenuBody" },
												React.createElement(DropzoneDemo, null),
												React.createElement('img', { className: 'img img-responsive img-thumbnail', src: this.state.logoUrl, alt: this.state.logoUrl })
											)
										)
									),
									React.createElement(
										'div',
										{ className: ' col-sm-9 col-md-9   ' },
										React.createElement(
											'div',
											{ key: "panelTwo" },
											React.createElement(
												'div',
												{ className: ' text-center', id: 'panelVideoId', key: "panelVideoBody" },
												React.createElement(
													'button',
													{ className: 'btn btn-info', onClick: this.handleAddSloganText.bind(this) },
													'Indsæt Slogan'
												),
												React.createElement(
													'h1',
													null,
													this.state.sloganText
												)
											)
										)
									)
								),
								React.createElement(
									'div',
									{ key: "colmdOptionsShowMenuSelectedZero", className: ' col-md-12  col-sm-12   sidebar-optionpanel  ' },
									React.createElement(
										'nav',
										null,
										React.createElement(
											'ul',
											{ className: 'pager' },
											React.createElement(
												'li',
												{ className: 'previous' },
												React.createElement(
													'a',
													{ href: '#', onClick: this.GoToLogoBannerChoice.bind(this) },
													React.createElement(
														'span',
														{ 'aria-hidden': 'true' },
														'?'
													),
													' Tilbage til valg af logo eller banner'
												)
											),
											React.createElement(
												'li',
												{ className: 'next' },
												React.createElement(
													'a',
													{ href: '#', onClick: this.GoToCreateMenu.bind(this) },
													'Placer En Menu ',
													React.createElement(
														'span',
														{ 'aria-hidden': 'true' },
														'?'
													)
												)
											)
										)
									)
								)
							)
						),
						this.state.contentSelected ? this.insertContentBox() : null
					);
				} else if (this.state.menuSelected == 1 && this.state.menuBannerSelected == 0 && this.state.logoBannerSelected == true) {
					contentPreview = React.createElement(
						'div',
						{ id: 'rowID', className: ' row', key: "rowMenuShow" },
						React.createElement(
							'div',
							{ className: 'container-fluid' },
							React.createElement(
								'div',
								{ className: ' col-md-12  col-sm-12  sidebar-left  ' },
								React.createElement(
									'nav',
									{ className: 'navbar navbar-usermenu navbar-static-top' },
									React.createElement(
										'div',
										{ className: 'navbar-header' },
										React.createElement(
											'button',
											{ type: 'button', className: 'navbar-toggle', 'data-toggle': 'collapse', 'data-target': '#myNavbar' },
											React.createElement('span', { className: 'icon-bar' }),
											React.createElement('span', { className: 'icon-bar' }),
											React.createElement('span', { className: 'icon-bar' })
										)
									),
									React.createElement(
										'div',
										{ className: 'col-sm-12 col-md-12  ' },
										React.createElement(
											'div',
											{ className: 'collapse navbar-collapse', id: 'myNavbar' },
											React.createElement(
												'a',
												{ href: '#', className: 'btn btn-info', onClick: this.addMenuArea.bind(this) },
												'Indsæt Menupunkt'
											),
											React.createElement(
												'nav',
												{ className: 'navbar navbar-default' },
												React.createElement(
													'div',
													{ className: 'container-fluid' },
													React.createElement(
														'div',
														{ className: 'navbar-header' },
														React.createElement(
															'div',
															{ className: 'collapse navbar-collapse', id: 'bs-example-navbar-collapse-1' },
															React.createElement(
																'ol',
																{ className: 'breadcrumb' },
																menuLinks
															)
														)
													)
												)
											)
										)
									)
								)
							),
							React.createElement(
								'div',
								{ key: "colmdMenuShow", className: ' col-md-12  col-sm-12   sidebar-left  ' },
								React.createElement(
									'div',
									{ className: ' col-sm-3 col-md-3   ' },
									React.createElement(
										'div',
										{ className: 'text-center', id: 'panelVideoId', key: "panelMenuBody" },
										React.createElement(DropzoneDemo, null),
										React.createElement('img', { className: 'img img-responsive img-thumbnail', src: this.state.logoUrl, alt: this.state.logoUrl })
									)
								),
								React.createElement(
									'div',
									{ className: ' col-sm-9 col-md-9   ' },
									React.createElement(
										'div',
										{ key: "panelTwo" },
										React.createElement(
											'div',
											{ className: ' text-center', id: 'panelVideoId', key: "panelVideoBody" },
											React.createElement(
												'button',
												{ className: 'btn btn-info', onClick: this.handleAddSloganText.bind(this) },
												'Indsæt Slogan'
											),
											React.createElement(
												'h1',
												null,
												this.state.sloganText
											)
										)
									)
								),
								React.createElement(
									'div',
									{ className: 'container' },
									this.state.contentSelected ? this.insertContentBox() : null
								)
							),
							React.createElement(
								'div',
								{ key: "colmdOptionsShowSelectedOne", className: ' col-md-12  col-sm-12   sidebar-optionpanel  ' },
								React.createElement(
									'nav',
									null,
									React.createElement(
										'ul',
										{ className: 'pager' },
										React.createElement(
											'li',
											{ className: 'previous' },
											React.createElement(
												'a',
												{ href: '#', onClick: this.GoToLogoBannerChoice.bind(this) },
												React.createElement(
													'span',
													{ 'aria-hidden': 'true' },
													'?'
												),
												' Tilbage til valg af logo eller banner'
											)
										),
										React.createElement(
											'li',
											{ className: 'next' },
											React.createElement(
												'a',
												{ href: '#', onClick: this.GoToCreateContent.bind(this) },
												'Placer  indhold ',
												React.createElement(
													'span',
													{ 'aria-hidden': 'true' },
													'?'
												)
											)
										)
									)
								)
							)
						)
					);
				} else if (this.state.menuSelected == 2 && this.state.menuBannerSelected == 0 && this.state.logoBannerSelected == true) {

					contentPreview = React.createElement(
						'div',
						null,
						React.createElement(
							'div',
							{ id: 'rowID', className: ' row', key: "rowMenuShow" },
							React.createElement(
								'div',
								{ className: 'container-fluid' },
								React.createElement(
									'div',
									{ key: "colmdMenuShow", className: ' col-md-12  col-sm-12   sidebar-left  ' },
									React.createElement(
										'div',
										{ className: 'col-sm-9 col-md-9  ' },
										React.createElement(
											'div',
											{ className: ' col-sm-3 col-md-3   ' },
											React.createElement(
												'div',
												{ className: '', key: "panel" },
												React.createElement(
													'div',
													{ className: ' text-center', id: 'panelVideoId', key: "panelMenuBody" },
													React.createElement(DropzoneDemo, null),
													React.createElement('img', { className: 'img img-responsive img-thumbnail', src: this.state.logoUrl, alt: this.state.logoUrl })
												)
											)
										),
										React.createElement(
											'div',
											{ className: ' col-sm-9 col-md-9   ' },
											React.createElement(
												'div',
												{ key: "panelTwo" },
												React.createElement(
													'div',
													{ className: 'text-center', id: 'panelVideoId', key: "panelVideoBody" },
													React.createElement(
														'button',
														{ className: 'btn btn-info', onClick: this.handleAddSloganText.bind(this) },
														'Indsæt Slogan'
													),
													React.createElement(
														'h1',
														null,
														this.state.sloganText
													)
												)
											)
										),
										React.createElement(
											'div',
											{ className: 'container' },
											this.state.contentSelected ? this.insertContentBox() : null
										)
									),
									React.createElement(
										'div',
										{ className: ' col-md-3  col-sm-3  sidebar-right   ' },
										React.createElement(
											'div',
											{ className: 'col-sm-12 col-md-12 sidebar  text-center' },
											React.createElement(
												'nav',
												{ className: 'navbar navbar-default navbar-static-top' },
												React.createElement(
													'div',
													{ className: 'navbar-header' },
													React.createElement(
														'button',
														{ type: 'button', className: 'navbar-toggle', 'data-toggle': 'collapse', 'data-target': '#myNavbar' },
														React.createElement('span', { className: 'icon-bar' }),
														React.createElement('span', { className: 'icon-bar' }),
														React.createElement('span', { className: 'icon-bar' })
													)
												),
												React.createElement(
													'div',
													{ 'class': 'collapse navbar-collapse', id: 'myNavbar' },
													React.createElement(
														'a',
														{ href: '#', className: 'btn btn-info', onClick: this.addMenuArea.bind(this) },
														'Indsæt Menupunkt'
													),
													menuLinksHorizontal
												)
											)
										)
									),
									React.createElement(
										'div',
										{ className: ' col-sm-12 col-md-12   ' },
										React.createElement(FooterBar, null)
									)
								)
							)
						),
						React.createElement(
							'div',
							{ key: "colmdOptionsShowSelectedTwo", className: ' col-md-12  col-sm-12   sidebar-optionpanel  ' },
							React.createElement(
								'nav',
								null,
								React.createElement(
									'ul',
									{ className: 'pager' },
									React.createElement(
										'li',
										{ className: 'previous' },
										React.createElement(
											'a',
											{ href: '#', onClick: this.GoToLogoBannerChoice.bind(this) },
											React.createElement(
												'span',
												{ 'aria-hidden': 'true' },
												'?'
											),
											' Tilbage til valg af logo eller banner'
										)
									),
									React.createElement(
										'li',
										{ className: 'next' },
										React.createElement(
											'a',
											{ href: '#', onClick: this.GoToCreateContent.bind(this) },
											'Placer indhold ',
											React.createElement(
												'span',
												{ 'aria-hidden': 'true' },
												'?'
											)
										)
									)
								)
							)
						)
					);
				}

				if (this.state.menuSelected == 1 && this.state.contentSelected != 0 && this.state.menuBannerSelected == 0 && this.state.logoBannerSelected == true) {
					contentPreview = React.createElement(
						'div',
						{ id: 'rowID', className: ' row', key: "rowMenuShow" },
						React.createElement(
							'div',
							{ className: 'container-fluid' },
							React.createElement(
								'div',
								{ className: ' col-md-12  col-sm-12  sidebar-left  ' },
								React.createElement(
									'nav',
									{ className: 'navbar navbar-usermenu navbar-static-top' },
									React.createElement(
										'div',
										{ className: 'navbar-header' },
										React.createElement(
											'button',
											{ type: 'button', className: 'navbar-toggle', 'data-toggle': 'collapse', 'data-target': '#myNavbar' },
											React.createElement('span', { className: 'icon-bar' }),
											React.createElement('span', { className: 'icon-bar' }),
											React.createElement('span', { className: 'icon-bar' })
										)
									),
									React.createElement(
										'div',
										{ className: 'collapse navbar-collapse', id: 'myNavbar' },
										React.createElement(
											'a',
											{ href: '#', className: 'btn btn-info', onClick: this.addMenuArea.bind(this) },
											'Indsæt Menupunkt'
										),
										React.createElement(
											'nav',
											{ className: 'navbar navbar-default' },
											React.createElement(
												'div',
												{ className: 'container-fluid' },
												React.createElement(
													'div',
													{ className: 'navbar-header' },
													React.createElement(
														'div',
														{ className: 'collapse navbar-collapse', id: 'bs-example-navbar-collapse-1' },
														React.createElement(
															'ol',
															{ className: 'breadcrumb' },
															menuLinks
														)
													)
												)
											)
										)
									)
								)
							),
							React.createElement(
								'div',
								{ key: "colmdMenuShow", className: ' col-md-12  col-sm-12   sidebar-left  ' },
								React.createElement(
									'div',
									{ className: ' col-sm-3 col-md-3   ' },
									React.createElement(
										'div',
										{ className: 'text-center', id: 'panelVideoId', key: "panelMenuBody" },
										React.createElement(DropzoneDemo, null),
										React.createElement('img', { className: 'img img-responsive img-thumbnail', src: this.state.logoUrl, alt: this.state.logoUrl })
									)
								),
								React.createElement(
									'div',
									{ className: ' col-sm-9 col-md-9   ' },
									React.createElement(
										'div',
										{ key: "panelTwo" },
										React.createElement(
											'div',
											{ className: ' text-center', id: 'panelVideoId', key: "panelVideoBody" },
											React.createElement(
												'button',
												{ className: 'btn btn-info', onClick: this.handleAddSloganText.bind(this) },
												'Indsæt Slogan'
											),
											React.createElement(
												'h1',
												null,
												this.state.sloganText
											)
										)
									)
								),
								React.createElement(
									'div',
									{ className: 'container' },
									this.state.contentSelected ? this.insertContentBox() : null
								)
							),
							React.createElement(
								'div',
								{ key: "colmdOptionsFooterShow", className: ' col-md-12  col-sm-12   sidebar-optionpanel  ' },
								React.createElement(
									'nav',
									null,
									React.createElement(
										'ul',
										{ className: 'pager' },
										React.createElement(
											'li',
											{ className: 'previous' },
											React.createElement(
												'a',
												{ href: '#', onClick: this.GoToLogoBannerChoice.bind(this) },
												React.createElement(
													'span',
													{ 'aria-hidden': 'true' },
													'?'
												),
												' Tilbage til valg af logo eller banner'
											)
										),
										React.createElement(
											'li',
											{ className: 'next' },
											React.createElement(
												'a',
												{ href: '#', onClick: this.GoToCreateFooterOrdinary.bind(this) },
												'Placer Sidefod ',
												React.createElement(
													'span',
													{ 'aria-hidden': 'true' },
													'?'
												)
											)
										)
									)
								)
							)
						)
					);
				} else if (this.state.menuSelected == 2 && this.state.contentSelected != 0 && this.state.menuBannerSelected == 0 && this.state.logoBannerSelected == true) {
					contentPreview = React.createElement(
						'div',
						null,
						React.createElement(
							'div',
							{ id: 'rowID', className: ' row', key: "rowMenuShow" },
							React.createElement(
								'div',
								{ className: 'container' },
								React.createElement(
									'div',
									{ key: "colmdMenuShow", className: ' col-md-12  col-sm-12   sidebar-left  ' },
									React.createElement(
										'div',
										{ className: 'col-sm-9 col-md-9  ' },
										React.createElement(
											'div',
											{ className: ' col-sm-3 col-md-3   ' },
											React.createElement(
												'div',
												{ className: '', key: "panel" },
												React.createElement(
													'div',
													{ className: ' text-center', id: 'panelVideoId', key: "panelMenuBody" },
													React.createElement(DropzoneDemo, null),
													React.createElement('img', { className: 'img img-responsive img-thumbnail', src: this.state.logoUrl, alt: this.state.logoUrl })
												)
											)
										),
										React.createElement(
											'div',
											{ className: ' col-sm-9 col-md-9   ' },
											React.createElement(
												'div',
												{ key: "panelTwo" },
												React.createElement(
													'div',
													{ className: 'text-center', id: 'panelVideoId', key: "panelVideoBody" },
													React.createElement(
														'button',
														{ className: 'btn btn-info', onClick: this.handleAddSloganText.bind(this) },
														'Indsæt Slogan'
													),
													React.createElement(
														'h1',
														null,
														this.state.sloganText
													)
												)
											)
										),
										React.createElement(
											'div',
											{ className: 'container' },
											this.state.contentSelected ? this.insertContentBox() : null
										)
									),
									React.createElement(
										'div',
										{ className: ' col-md-3  col-sm-3  sidebar-right   ' },
										React.createElement(
											'div',
											{ className: 'col-sm-12 col-md-12 sidebar text-center' },
											React.createElement(
												'nav',
												{ className: 'navbar navbar-default navbar-static-top' },
												React.createElement(
													'div',
													{ className: 'navbar-header' },
													React.createElement(
														'button',
														{ type: 'button', className: 'navbar-toggle', 'data-toggle': 'collapse', 'data-target': '#myNavbar' },
														React.createElement('span', { className: 'icon-bar' }),
														React.createElement('span', { className: 'icon-bar' }),
														React.createElement('span', { className: 'icon-bar' })
													)
												),
												React.createElement(
													'div',
													{ 'class': 'collapse navbar-collapse', id: 'myNavbar' },
													React.createElement(
														'a',
														{ href: '#', className: 'btn btn-info', onClick: this.addMenuArea.bind(this) },
														'Indsæt Menupunkt'
													),
													menuLinksHorizontal
												)
											)
										)
									)
								)
							)
						),
						React.createElement(
							'div',
							{ key: "colmdOptionsFooterShow", className: ' col-md-12  col-sm-12   sidebar-optionpanel  ' },
							React.createElement(
								'nav',
								null,
								React.createElement(
									'ul',
									{ className: 'pager' },
									React.createElement(
										'li',
										{ className: 'previous' },
										React.createElement(
											'a',
											{ href: '#', onClick: this.GoToLogoBannerChoice.bind(this) },
											React.createElement(
												'span',
												{ 'aria-hidden': 'true' },
												'?'
											),
											' Tilbage til valg af logo eller banner'
										)
									),
									React.createElement(
										'li',
										{ className: 'next' },
										React.createElement(
											'a',
											{ href: '#', onClick: this.GoToCreateFooterOrdinary.bind(this) },
											'Placer Sidefod ',
											React.createElement(
												'span',
												{ 'aria-hidden': 'true' },
												'?'
											)
										)
									)
								)
							)
						)
					);
				}

				if (this.state.menuSelected == 1 && this.state.contentSelected != 0 && this.state.footerSelected != 0 && this.state.menuBannerSelected == 0 && this.state.logoBannerSelected == true) {

					contentPreview = React.createElement(
						'div',
						{ id: 'rowID', className: ' row', key: "rowMenuShow" },
						React.createElement(
							'div',
							{ className: 'container-fluid' },
							React.createElement(
								'div',
								{ className: ' col-md-12  col-sm-12  sidebar-left  ' },
								React.createElement(
									'nav',
									{ className: 'navbar navbar-usermenu navbar-static-top' },
									React.createElement(
										'div',
										{ className: 'navbar-header' },
										React.createElement(
											'button',
											{ type: 'button', className: 'navbar-toggle', 'data-toggle': 'collapse', 'data-target': '#myNavbar' },
											React.createElement('span', { className: 'icon-bar' }),
											React.createElement('span', { className: 'icon-bar' }),
											React.createElement('span', { className: 'icon-bar' })
										)
									),
									React.createElement(
										'div',
										{ className: 'collapse navbar-collapse', id: 'myNavbar' },
										React.createElement(
											'a',
											{ href: '#', className: 'btn btn-info', onClick: this.addMenuArea.bind(this) },
											'Indsæt Menupunkt'
										),
										React.createElement(
											'nav',
											{ className: 'navbar navbar-default' },
											React.createElement(
												'div',
												{ className: 'container-fluid' },
												React.createElement(
													'div',
													{ className: 'navbar-header' },
													React.createElement(
														'div',
														{ className: 'collapse navbar-collapse', id: 'bs-example-navbar-collapse-1' },
														React.createElement(
															'ol',
															{ className: 'breadcrumb' },
															menuLinks
														)
													)
												)
											)
										)
									)
								)
							),
							React.createElement(
								'div',
								{ key: "colmdMenuShow", className: ' col-md-12  col-sm-12   sidebar-left  ' },
								React.createElement(
									'div',
									{ className: ' col-sm-3 col-md-3   ' },
									React.createElement(
										'div',
										{ className: 'text-center', id: 'panelVideoId', key: "panelMenuBody" },
										React.createElement(DropzoneDemo, null),
										React.createElement('img', { className: 'img img-responsive img-thumbnail', src: this.state.logoUrl, alt: this.state.logoUrl })
									)
								),
								React.createElement(
									'div',
									{ className: ' col-sm-9 col-md-9   ' },
									React.createElement(
										'div',
										{ key: "panelTwo" },
										React.createElement(
											'div',
											{ className: ' text-center', id: 'panelVideoId', key: "panelVideoBody" },
											React.createElement(
												'button',
												{ className: 'btn btn-info', onClick: this.handleAddSloganText.bind(this) },
												'Indsæt Slogan'
											),
											React.createElement(
												'h1',
												null,
												this.state.sloganText
											)
										)
									)
								),
								React.createElement(
									'div',
									{ className: 'container' },
									this.state.contentSelected ? this.insertContentBox() : null
								)
							),
							React.createElement(
								'div',
								{ key: "colmdFooterShow", className: ' col-md-12  col-sm-12   sidebar-left  ' },
								React.createElement(
									'div',
									{ className: 'col-sm-12 col-md-12  ' },
									React.createElement(FooterBar, null)
								)
							),
							React.createElement(
								'div',
								{ key: "colmdOptionsFooterShow", className: ' col-md-12  col-sm-12   sidebar-optionpanel  ' },
								React.createElement(
									'nav',
									null,
									React.createElement(
										'ul',
										{ className: 'pager' },
										React.createElement(
											'li',
											{ className: 'previous' },
											React.createElement(
												'a',
												{ href: '#', onClick: this.GoToFrontpage.bind(this) },
												React.createElement(
													'span',
													{ 'aria-hidden': 'true' },
													'?'
												),
												' Tilbage til forsiden'
											)
										),
										React.createElement(
											'li',
											{ className: 'next' },
											React.createElement(
												'a',
												{ href: '#', onClick: this.downloadHTML.bind(this) },
												'Download HTML ',
												React.createElement(
													'span',
													{ 'aria-hidden': 'true' },
													'?'
												)
											)
										)
									)
								)
							)
						)
					);
				} else if (this.state.menuSelected == 2 && this.state.contentSelected != 0 && this.state.footerSelected != 0 && this.state.menuBannerSelected == 0 && this.state.logoBannerSelected == true) {
					contentPreview = React.createElement(
						'div',
						null,
						React.createElement(
							'div',
							{ id: 'rowID', className: ' row', key: "rowMenuShow" },
							React.createElement(
								'div',
								{ className: 'container' },
								React.createElement(
									'div',
									{ key: "colmdMenuShow", className: ' col-md-12  col-sm-12   sidebar-left  ' },
									React.createElement(
										'div',
										{ className: 'col-sm-9 col-md-9  ' },
										React.createElement(
											'div',
											{ className: ' col-sm-3 col-md-3   ' },
											React.createElement(
												'div',
												{ className: '', key: "panel" },
												React.createElement(
													'div',
													{ className: ' text-center', id: 'panelVideoId', key: "panelMenuBody" },
													React.createElement(DropzoneDemo, null),
													React.createElement('img', { className: 'img img-responsive img-thumbnail', src: this.state.logoUrl, alt: this.state.logoUrl })
												)
											)
										),
										React.createElement(
											'div',
											{ className: ' col-sm-9 col-md-9   ' },
											React.createElement(
												'div',
												{ key: "panelTwo" },
												React.createElement(
													'div',
													{ className: 'text-center', id: 'panelVideoId', key: "panelVideoBody" },
													React.createElement(
														'button',
														{ className: 'btn btn-info', onClick: this.handleAddSloganText.bind(this) },
														'Indsæt Slogan'
													),
													React.createElement(
														'h1',
														null,
														this.state.sloganText
													)
												)
											)
										),
										React.createElement(
											'div',
											{ className: 'container' },
											this.state.contentSelected ? this.insertContentBox() : null
										)
									),
									React.createElement(
										'div',
										{ className: ' col-md-3  col-sm-3  sidebar-right   ' },
										React.createElement(
											'div',
											{ className: 'col-sm-12 col-md-12 sidebar  text-center' },
											React.createElement(
												'nav',
												{ className: 'navbar navbar-default navbar-static-top' },
												React.createElement(
													'div',
													{ className: 'navbar-header' },
													React.createElement(
														'button',
														{ type: 'button', className: 'navbar-toggle', 'data-toggle': 'collapse', 'data-target': '#myNavbar' },
														React.createElement('span', { className: 'icon-bar' }),
														React.createElement('span', { className: 'icon-bar' }),
														React.createElement('span', { className: 'icon-bar' })
													)
												),
												React.createElement(
													'div',
													{ 'class': 'collapse navbar-collapse', id: 'myNavbar' },
													React.createElement(
														'a',
														{ href: '#', className: 'btn btn-info', onClick: this.addMenuArea.bind(this) },
														'Indsæt Menupunkt'
													),
													menuLinksHorizontal
												)
											)
										)
									),
									React.createElement(
										'div',
										{ className: ' col-sm-12 col-md-12   ' },
										React.createElement(FooterBar, null)
									)
								)
							)
						),
						React.createElement(
							'div',
							{ key: "colmdOptionsFooterShow", className: ' col-md-12  col-sm-12   sidebar-optionpanel  ' },
							React.createElement(
								'nav',
								null,
								React.createElement(
									'ul',
									{ className: 'pager' },
									React.createElement(
										'li',
										{ className: 'previous' },
										React.createElement(
											'a',
											{ href: '#', onClick: this.GoToFrontpage.bind(this) },
											React.createElement(
												'span',
												{ 'aria-hidden': 'true' },
												'?'
											),
											' Tilbage til forsiden'
										)
									),
									React.createElement(
										'li',
										{ className: 'next' },
										React.createElement(
											'a',
											{ href: '#', onClick: this.downloadHTML.bind(this) },
											'Download HTML ',
											React.createElement(
												'span',
												{ 'aria-hidden': 'true' },
												'?'
											)
										)
									)
								)
							)
						)
					);
				}
			}
			return React.createElement(
				'div',
				null,
				contentPreview,
				menuObject
			);
		}
	}, {
		key: 'answerBasedOnSlogan',
		value: function answerBasedOnSlogan() {
			return React.createElement(
				'div',
				{ className: '' },
				React.createElement(
					'button',
					{ className: 'btn btn-xs btn-info', onClick: this.changeStateOfMount.bind(this) },
					'Vis Resultatet'
				)
			);
		}
	}, {
		key: 'basedOnBanner',
		value: function basedOnBanner() {

			var contentPreview;
			var menuObject;
			var menuLinks;

			var menuLinksHorizontal;

			var pageFooter = React.createElement(
				'footer',
				{ className: 'bs-docs-footer', role: 'contentinfo' },
				React.createElement(
					'div',
					{ className: 'container' },
					React.createElement(
						'button',
						{ className: 'btn btn-info', onClick: this.handleAddFooterText.bind(this) },
						'Indsæt Tekst Til Sidefod'
					),
					React.createElement(
						'p',
						null,
						this.state.footerText
					)
				)
			);

			menuLinks = this.state.menuItem.map(function (item, i) {
				return React.createElement(
					'li',
					{ className: '' },
					React.createElement(
						'a',
						{ className: ' ', href: item, key: item },
						item
					)
				);
			}.bind(this));

			menuLinksHorizontal = this.state.menuItem.map(function (item, i) {
				return React.createElement(
					'div',
					null,
					React.createElement(
						'ul',
						{ className: 'nav nav-pills nav-stacked', key: item },
						React.createElement(
							'li',
							{ className: 'active' },
							React.createElement(
								'a',
								{ href: item },
								item
							)
						)
					),
					React.createElement('div', { 'class': 'clearfix visible-lg' })
				);
			}.bind(this));

			if (this.state.bannerMounted) {

				var divStyle = {
					color: 'white',
					backgroundSize: '100%',

					backgroundImage: 'url(' + this.state.logoUrl + ')',
					WebkitTransition: 'all', // note the capital 'W' here
					msTransition: 'all' // 'ms' is the only lowercase vendor prefix
				};

				var divImage;

				if (this.state.displayBannerImgBtn) {

					divImage = React.createElement(
						'div',
						{ style: divStyle, className: '    ' },
						React.createElement(DropzoneDemo, null),
						React.createElement('img', { className: 'img img-responsive', src: this.state.logoUrl, alt: this.state.logoUrl })
					);
				} else {
					divImage = React.createElement(
						'div',
						{ style: divStyle, className: '   ' },
						React.createElement('img', { className: 'img img-responsive', src: this.state.logoUrl, alt: this.state.logoUrl })
					);
				}

				if (this.state.displayBannerImgBtn && this.state.menuBannerSelected == 0 && this.state.menuSelected == 0) {

					contentPreview = React.createElement(
						'div',
						null,
						React.createElement(
							'div',
							{ className: 'container-fluid' },
							React.createElement(
								'div',
								{ id: 'rowID', className: ' row', key: "rowMenuShow" },
								React.createElement(
									'div',
									{ key: "colmdOptionsShow", className: ' col-md-12    ' },
									React.createElement(
										'div',
										{ key: "colmdMenuShow", className: ' col-sm-12 col-md-12  sidebar-left  ' },
										divImage,
										React.createElement(
											'div',
											{ className: 'container' },
											this.state.contentSelected ? this.insertContentBox() : null
										)
									)
								)
							),
							this.state.createMenu == false ? this.insertUserOptionsBannerMenu() : null
						)
					);
				} else if (this.state.menuBannerSelected == 1 && this.state.menuSelected == 0) {
					contentPreview = React.createElement(
						'div',
						null,
						React.createElement(
							'div',
							{ id: 'rowID', className: ' container-fluid', key: "rowMenuShow" },
							React.createElement(
								'div',
								{ className: 'row' },
								React.createElement(
									'div',
									{ className: ' col-md-12  col-sm-12  sidebar-left  ' },
									React.createElement(
										'nav',
										{ className: 'navbar navbar-usermenu navbar-static-top' },
										React.createElement(
											'div',
											{ className: 'navbar-header' },
											React.createElement(
												'button',
												{ type: 'button', className: 'navbar-toggle', 'data-toggle': 'collapse', 'data-target': '#myNavbar' },
												React.createElement('span', { className: 'icon-bar' }),
												React.createElement('span', { className: 'icon-bar' }),
												React.createElement('span', { className: 'icon-bar' })
											)
										),
										React.createElement(
											'div',
											{ className: 'collapse navbar-collapse', id: 'myNavbar' },
											React.createElement(
												'a',
												{ href: '#', className: 'btn btn-info', onClick: this.addMenuArea.bind(this) },
												'Indsæt Menupunkt'
											),
											React.createElement(
												'nav',
												{ className: 'navbar navbar-default' },
												React.createElement(
													'div',
													{ className: 'container-fluid' },
													React.createElement(
														'div',
														{ className: 'navbar-header' },
														React.createElement(
															'div',
															{ className: 'collapse navbar-collapse', id: 'bs-example-navbar-collapse-1' },
															React.createElement(
																'ol',
																{ className: 'breadcrumb' },
																menuLinks
															)
														)
													)
												)
											)
										)
									)
								),
								React.createElement(
									'div',
									{ key: "colmdMenuShow", className: ' col-md-12  col-sm-12   sidebar-left  ' },
									divImage,
									React.createElement(
										'div',
										{ className: 'container' },
										this.state.contentSelected ? this.insertContentBox() : null
									)
								),
								React.createElement(
									'div',
									{ key: "colmdOptionsShowMenuBannerSelectedOne", className: ' col-md-12  col-sm-12   sidebar-optionpanel  ' },
									React.createElement(
										'nav',
										null,
										React.createElement(
											'ul',
											{ className: 'pager' },
											React.createElement(
												'li',
												{ className: 'previous' },
												React.createElement(
													'a',
													{ href: '#', onClick: this.GoToMenuChoice.bind(this) },
													React.createElement(
														'span',
														{ 'aria-hidden': 'true' },
														'?'
													),
													' Tilbage til valg af menu'
												)
											),
											React.createElement(
												'li',
												{ className: 'next' },
												React.createElement(
													'a',
													{ href: '#', onClick: this.GoToCreateContent.bind(this) },
													'Placer indhold ',
													React.createElement(
														'span',
														{ 'aria-hidden': 'true' },
														'?'
													)
												)
											)
										)
									)
								)
							)
						)
					);
				} else if (this.state.menuBannerSelected == 2 && this.state.menuSelected == 0) {

					contentPreview = React.createElement(
						'div',
						null,
						React.createElement(
							'div',
							{ id: 'rowID', className: ' container-fluid', key: "rowMenuShow" },
							React.createElement(
								'div',
								{ className: 'row' },
								React.createElement(
									'div',
									{ key: "colmdMenuShow", className: ' col-md-12  col-sm-12   sidebar-left  ' },
									React.createElement(
										'div',
										{ className: 'col-sm-9 col-md-9  ' },
										divImage,
										React.createElement(
											'div',
											{ className: 'container' },
											this.state.contentSelected ? this.insertContentBox() : null
										)
									),
									React.createElement(
										'div',
										{ className: ' col-md-3  col-sm-3  sidebar-right   ' },
										React.createElement(
											'div',
											{ className: 'col-sm-12 col-md-12 sidebar text-center' },
											React.createElement(
												'a',
												{ href: '#', className: 'btn btn-info', onClick: this.addMenuArea.bind(this) },
												'Indsæt Menupunkt'
											),
											menuLinksHorizontal
										)
									)
								),
								React.createElement(
									'div',
									{ key: "colmdOptionsShowBannerSelectedTwo", className: ' col-md-12  col-sm-12   sidebar-optionpanel  ' },
									React.createElement(
										'nav',
										null,
										React.createElement(
											'ul',
											{ className: 'pager' },
											React.createElement(
												'li',
												{ className: 'previous' },
												React.createElement(
													'a',
													{ href: '#', onClick: this.GoToMenuChoice.bind(this) },
													React.createElement(
														'span',
														{ 'aria-hidden': 'true' },
														'?'
													),
													' Tilbage til valg af menu'
												)
											),
											React.createElement(
												'li',
												{ className: 'next' },
												React.createElement(
													'a',
													{ href: '#', onClick: this.GoToCreateContent.bind(this) },
													'Placer indhold ',
													React.createElement(
														'span',
														{ 'aria-hidden': 'true' },
														'?'
													)
												)
											)
										)
									)
								)
							)
						)
					);
				} else {

					contentPreview = React.createElement(
						'div',
						null,
						React.createElement(
							'div',
							{ id: 'rowID', className: ' container-fluid', key: "rowMenuShow" },
							React.createElement(
								'div',
								{ className: 'row' },
								React.createElement(
									'div',
									{ key: "colmdMenuShow", className: ' col-sm-12 col-md-12 sidebar-left   ' },
									divImage,
									React.createElement(
										'div',
										{ className: 'container' },
										this.state.contentSelected ? this.insertContentBox() : null
									)
								)
							),
							this.state.createMenu == false ? this.insertUserOptionsMenu() : null
						),
						this.state.contentSelected ? this.insertContentBox() : null
					);
				}

				if (this.state.menuBannerSelected == 1 && this.state.contentSelected != 0 && this.state.menuSelected == 0) {

					contentPreview = React.createElement(
						'div',
						null,
						React.createElement(
							'div',
							{ id: 'rowID', className: ' container-fluid', key: "rowMenuShow" },
							React.createElement(
								'div',
								{ className: 'row' },
								React.createElement(
									'div',
									{ className: ' col-md-12  col-sm-12  sidebar-left  ' },
									React.createElement(
										'nav',
										{ className: 'navbar navbar-usermenu navbar-static-top' },
										React.createElement(
											'div',
											{ className: 'navbar-header' },
											React.createElement(
												'button',
												{ type: 'button', className: 'navbar-toggle', 'data-toggle': 'collapse', 'data-target': '#myNavbar' },
												React.createElement('span', { className: 'icon-bar' }),
												React.createElement('span', { className: 'icon-bar' }),
												React.createElement('span', { className: 'icon-bar' })
											)
										),
										React.createElement(
											'div',
											{ className: 'collapse navbar-collapse', id: 'myNavbar' },
											React.createElement(
												'a',
												{ href: '#', className: 'btn btn-info', onClick: this.addMenuArea.bind(this) },
												'Indsæt Menupunkt'
											),
											React.createElement(
												'nav',
												{ className: 'navbar navbar-default' },
												React.createElement(
													'div',
													{ className: 'container-fluid' },
													React.createElement(
														'div',
														{ className: 'navbar-header' },
														React.createElement(
															'div',
															{ className: 'collapse navbar-collapse', id: 'bs-example-navbar-collapse-1' },
															React.createElement(
																'ol',
																{ className: 'breadcrumb' },
																menuLinks
															)
														)
													)
												)
											)
										)
									)
								),
								React.createElement(
									'div',
									{ key: "colmdMenuShow", className: ' col-md-12  col-sm-12   sidebar-left  ' },
									divImage,
									React.createElement(
										'div',
										{ className: 'container' },
										this.state.contentSelected ? this.insertContentBox() : null
									)
								),
								React.createElement(
									'div',
									{ key: "colmdOptionsFooterShow", className: ' col-md-12  col-sm-12   sidebar-optionpanel  ' },
									React.createElement(
										'nav',
										null,
										React.createElement(
											'ul',
											{ className: 'pager' },
											React.createElement(
												'li',
												{ className: 'previous' },
												React.createElement(
													'a',
													{ href: '#', onClick: this.GoToLogoBannerChoice.bind(this) },
													React.createElement(
														'span',
														{ 'aria-hidden': 'true' },
														'?'
													),
													'Tilbage til valg af logo eller banner'
												)
											),
											React.createElement(
												'li',
												{ className: 'next' },
												React.createElement(
													'a',
													{ href: '#', onClick: this.GoToCreateFooter.bind(this) },
													'Placer En Sidefod ',
													React.createElement(
														'span',
														{ 'aria-hidden': 'true' },
														'?'
													)
												)
											)
										)
									)
								)
							)
						)
					);
				} else if (this.state.menuBannerSelected == 2 && this.state.contentSelected != 0 && this.state.menuSelected == 0) {

					contentPreview = React.createElement(
						'div',
						null,
						React.createElement(
							'div',
							{ id: 'rowID', className: ' container-fluid', key: "rowMenuShow" },
							React.createElement(
								'div',
								{ className: 'row' },
								React.createElement(
									'div',
									{ key: "colmdMenuShow", className: ' col-md-12  col-sm-12   sidebar-left  ' },
									React.createElement(
										'div',
										{ className: 'col-sm-9 col-md-9  ' },
										divImage,
										React.createElement(
											'div',
											{ className: 'container' },
											this.state.contentSelected ? this.insertContentBox() : null
										)
									),
									React.createElement(
										'div',
										{ className: ' col-md-3  col-sm-3  sidebar-right   ' },
										React.createElement(
											'div',
											{ className: 'col-sm-12 col-md-12 sidebar text-center' },
											React.createElement(
												'a',
												{ href: '#', className: 'btn btn-info', onClick: this.addMenuArea.bind(this) },
												'Indsæt Menupunkt'
											),
											menuLinksHorizontal
										)
									)
								),
								React.createElement('div', { className: ' col-sm-12 col-md-12   ' }),
								React.createElement(
									'div',
									{ key: "colmdOptionsFooterShow", className: ' col-md-12  col-sm-12   sidebar-optionpanel  ' },
									React.createElement(
										'nav',
										null,
										React.createElement(
											'ul',
											{ className: 'pager' },
											React.createElement(
												'li',
												{ className: 'previous' },
												React.createElement(
													'a',
													{ href: '#', onClick: this.GoToLogoBannerChoice.bind(this) },
													React.createElement(
														'span',
														{ 'aria-hidden': 'true' },
														'?'
													),
													'Tilbage til valg af logo eller banner'
												)
											),
											React.createElement(
												'li',
												{ className: 'next' },
												React.createElement(
													'a',
													{ href: '#', onClick: this.GoToCreateFooter.bind(this) },
													'Placer En Sidefod ',
													React.createElement(
														'span',
														{ 'aria-hidden': 'true' },
														'?'
													)
												)
											)
										)
									)
								)
							)
						)
					);
				}
				if (this.state.menuBannerSelected == 1 && this.state.contentSelected != 0 && this.state.footerSelected != 0 && this.state.menuSelected == 0) {
					contentPreview = React.createElement(
						'div',
						{ id: 'rowID', className: ' row', key: "rowMenuShow" },
						React.createElement(
							'div',
							{ className: 'container-fluid' },
							React.createElement(
								'div',
								{ className: ' col-md-12  col-sm-12  sidebar-left  ' },
								React.createElement(
									'nav',
									{ className: 'navbar navbar-usermenu navbar-static-top' },
									React.createElement(
										'div',
										{ className: 'navbar-header' },
										React.createElement(
											'button',
											{ type: 'button', className: 'navbar-toggle', 'data-toggle': 'collapse', 'data-target': '#myNavbar' },
											React.createElement('span', { className: 'icon-bar' }),
											React.createElement('span', { className: 'icon-bar' }),
											React.createElement('span', { className: 'icon-bar' })
										)
									),
									React.createElement(
										'div',
										{ className: 'collapse navbar-collapse', id: 'myNavbar' },
										React.createElement(
											'a',
											{ href: '#', className: 'btn btn-info', onClick: this.addMenuArea.bind(this) },
											'Indsæt Menupunkt'
										),
										React.createElement(
											'nav',
											{ className: 'navbar navbar-default' },
											React.createElement(
												'div',
												{ className: 'container-fluid' },
												React.createElement(
													'div',
													{ className: 'navbar-header' },
													React.createElement(
														'div',
														{ className: 'collapse navbar-collapse', id: 'bs-example-navbar-collapse-1' },
														React.createElement(
															'ol',
															{ className: 'breadcrumb' },
															menuLinks
														)
													)
												)
											)
										)
									)
								)
							),
							React.createElement(
								'div',
								{ key: "colmdMenuShow", className: ' col-md-12  col-sm-12   sidebar-left  ' },
								React.createElement(
									'div',
									{ className: ' col-sm-3 col-md-3   ' },
									React.createElement(
										'div',
										{ className: 'text-center', id: 'panelVideoId', key: "panelMenuBody" },
										React.createElement(DropzoneDemo, null),
										React.createElement('img', { className: 'img img-responsive img-thumbnail', src: this.state.logoUrl, alt: this.state.logoUrl })
									)
								),
								React.createElement(
									'div',
									{ className: ' col-sm-9 col-md-9   ' },
									React.createElement(
										'div',
										{ key: "panelTwo" },
										React.createElement(
											'div',
											{ className: ' text-center', id: 'panelVideoId', key: "panelVideoBody" },
											React.createElement(
												'button',
												{ className: 'btn btn-info', onClick: this.handleAddSloganText.bind(this) },
												'Indsæt Slogan'
											),
											React.createElement(
												'h1',
												null,
												this.state.sloganText
											)
										)
									)
								),
								React.createElement(
									'div',
									{ className: 'container' },
									this.state.contentSelected ? this.insertContentBox() : null
								),
								React.createElement(FooterBar, null)
							),
							React.createElement(
								'div',
								{ key: "colmdOptionsFooterShow", className: ' col-md-12  col-sm-12   sidebar-optionpanel  ' },
								React.createElement(
									'nav',
									null,
									React.createElement(
										'ul',
										{ className: 'pager' },
										React.createElement(
											'li',
											{ className: 'previous' },
											React.createElement(
												'a',
												{ href: '#', onClick: this.GoToFrontpage.bind(this) },
												React.createElement(
													'span',
													{ 'aria-hidden': 'true' },
													'?'
												),
												'Tilbage til forsiden'
											)
										),
										React.createElement(
											'li',
											{ className: 'next' },
											React.createElement(
												'a',
												{ href: '#', onClick: this.downloadHTML.bind(this) },
												'Download HTML ',
												React.createElement(
													'span',
													{ 'aria-hidden': 'true' },
													'?'
												)
											)
										)
									)
								)
							)
						)
					);
				} else if (this.state.menuBannerSelected == 2 && this.state.contentSelected != 0 && this.state.footerSelected != 0 && this.state.menuSelected == 0) {

					contentPreview = React.createElement(
						'div',
						null,
						React.createElement(
							'div',
							{ id: 'rowID', className: ' row', key: "rowMenuShow" },
							React.createElement(
								'div',
								{ className: 'container' },
								React.createElement(
									'div',
									{ key: "colmdMenuShow", className: ' col-md-12  col-sm-12   sidebar-left  ' },
									React.createElement(
										'div',
										{ className: 'col-sm-9 col-md-9  ' },
										React.createElement(
											'div',
											{ className: ' col-sm-3 col-md-3   ' },
											React.createElement(
												'div',
												{ className: '', key: "panel" },
												React.createElement(
													'div',
													{ className: ' text-center', id: 'panelVideoId', key: "panelMenuBody" },
													React.createElement(DropzoneDemo, null),
													React.createElement('img', { className: 'img img-responsive img-thumbnail', src: this.state.logoUrl, alt: this.state.logoUrl })
												)
											)
										),
										React.createElement(
											'div',
											{ className: ' col-sm-9 col-md-9   ' },
											React.createElement(
												'div',
												{ key: "panelTwo" },
												React.createElement(
													'div',
													{ className: 'text-center', id: 'panelVideoId', key: "panelVideoBody" },
													React.createElement(
														'button',
														{ className: 'btn btn-info', onClick: this.handleAddSloganText.bind(this) },
														'Indsæt Slogan'
													),
													React.createElement(
														'h1',
														null,
														this.state.sloganText
													)
												)
											)
										),
										React.createElement(
											'div',
											{ className: 'container' },
											this.state.contentSelected ? this.insertContentBox() : null
										)
									),
									React.createElement(
										'div',
										{ className: ' col-md-3  col-sm-3  sidebar-right   ' },
										React.createElement(
											'div',
											{ className: 'col-sm-12 col-md-12 sidebar  text-center' },
											React.createElement(
												'nav',
												{ className: 'navbar navbar-default navbar-static-top' },
												React.createElement(
													'div',
													{ className: 'navbar-header' },
													React.createElement(
														'button',
														{ type: 'button', className: 'navbar-toggle', 'data-toggle': 'collapse', 'data-target': '#myNavbar' },
														React.createElement('span', { className: 'icon-bar' }),
														React.createElement('span', { className: 'icon-bar' }),
														React.createElement('span', { className: 'icon-bar' })
													)
												),
												React.createElement(
													'div',
													{ 'class': 'collapse navbar-collapse', id: 'myNavbar' },
													React.createElement(
														'a',
														{ href: '#', className: 'btn btn-info', onClick: this.addMenuArea.bind(this) },
														'Indsæt Menupunkt'
													),
													menuLinksHorizontal
												)
											)
										)
									),
									React.createElement(FooterBar, null)
								)
							)
						),
						React.createElement(
							'div',
							{ key: "colmdOptionsFooterShow", className: ' col-md-12  col-sm-12   sidebar-optionpanel  ' },
							React.createElement(
								'nav',
								null,
								React.createElement(
									'ul',
									{ className: 'pager' },
									React.createElement(
										'li',
										{ className: 'previous' },
										React.createElement(
											'a',
											{ href: '#', onClick: this.GoToFrontpage.bind(this) },
											React.createElement(
												'span',
												{ 'aria-hidden': 'true' },
												'?'
											),
											'Tilbage til forsiden'
										)
									),
									React.createElement(
										'li',
										{ className: 'next' },
										React.createElement(
											'a',
											{ href: '#', onClick: this.downloadHTML.bind(this) },
											'Download HTML ',
											React.createElement(
												'span',
												{ 'aria-hidden': 'true' },
												'?'
											)
										)
									)
								)
							)
						)
					);
				}
			}
			return React.createElement(
				'div',
				null,
				contentPreview,
				menuObject
			);
		}
	}, {
		key: 'basedOnLogo',
		value: function basedOnLogo() {
			return React.createElement(
				'div',
				{ className: '' },
				React.createElement(
					'div',
					{ className: 'col-md-4' },
					React.createElement(ModalHelpController, { imgUrl: 'img/user_help_slogan.png' })
				),
				React.createElement(
					'div',
					{ className: 'col-md-8' },
					React.createElement(
						'h2',
						null,
						'Har du et slogan ',
						React.createElement(
							'p',
							{ className: 'small-caps small' },
							this.props.option,
							' '
						)
					)
				),
				React.createElement('div', { className: 'col-md-12' }),
				React.createElement(
					'div',
					{ className: 'col-md-2' },
					React.createElement('img', { src: 'img/pencil_2_icon.png', className: 'img img-responsive ', alt: 'vores logo' })
				),
				React.createElement(
					'div',
					{ className: 'col-md-10' },
					React.createElement(
						'form',
						null,
						React.createElement(
							'p',
							{ className: 'form-group' },
							React.createElement(
								'label',
								{ className: 'radio-inline' },
								React.createElement('input', { type: 'radio', name: 'inlineRadioOptions', id: 'QuestionOneSloganYesId', value: 'yes', onClick: this.basedOnSloganYes.bind(this) }),
								' Ja'
							)
						),
						React.createElement(
							'p',
							{ className: 'form-group' },
							React.createElement(
								'label',
								{ className: 'radio-inline' },
								React.createElement('input', { type: 'radio', name: 'inlineRadioOptions', id: 'QuestionOneSloganNoId', value: 'no', onClick: this.basedOnSloganNo.bind(this) }),
								' Nej'
							)
						)
					),
					this.state.sloganQuestion ? this.answerBasedOnSlogan() : React.createElement(ErrorMessages, { Type: 'hvis du vælger nej til slogan, så vil der opstå en fejl' })
				)
			);
		}
	}, {
		key: 'hideContentQuestionMenu',
		value: function hideContentQuestionMenu() {
			this.setState({ mounted: false });
		}
	}, {
		key: 'checkSetLogo',
		value: function checkSetLogo() {
			this.setState({ showNextQuestion: true });
		}
	}, {
		key: 'checkSetBanner',
		value: function checkSetBanner() {
			//	this.setState({ showNextQuestion: false });
			this.setState({ bannerMounted: true });

			this.setState({ mounted: false });
		}
	}, {
		key: 'runSetup',
		value: function runSetup() {
			this.setState({ startSetup: true });
		}
	}, {
		key: 'render',
		value: function render() {
			var row;
			var infoRow;
			var value = this.state.value;

			var rowSetup;

			if (this.state.mounted) {

				if (this.state.startSetup == false) {
					rowSetup = React.createElement(
						'div',
						{ id: 'rowID', className: ' ', key: "rowForStart" },
						React.createElement(
							'div',
							{ key: "colmd12Welcome", className: 'col-md-12 ' },
							React.createElement(
								'div',
								{ className: ' jumbotron jumbotroncolors  text-center' },
								React.createElement(
									'h1',
									{ className: 'pFrontpage' },
									this.state.jumbotronWelcomeTitle
								),
								React.createElement(
									'p',
									{ className: 'pFrontpage' },
									'Nemhed.dk er en udstr\u00e6kt h\u00E5nd til dig der gerne vil skabe din helt egen, unikke hjemmeside. Her beh\u00F8ver du ingen erfaring med HTML-koder'
								)
							)
						),
						React.createElement(
							'div',
							{ key: "colmd6bob", className: 'col-md-4 ' },
							React.createElement(
								'div',
								{ className: 'panel  ', key: "panelbob" },
								React.createElement(
									'a',
									{ className: 'thumbnail', href: 'hvorfor.html', alt: 'hvorfor' },
									React.createElement(
										'h2',
										{ className: 'text-center' },
										'Hvorfor?'
									),
									React.createElement('img', { src: 'img/new/hvorfor.png', className: ' img img-responsive  ', alt: 'Hvorfor nemhed.dk' })
								)
							)
						),
						React.createElement(
							'div',
							{ className: 'col-md-4', key: 63 },
							React.createElement(
								'div',
								{ className: 'panel', key: "videoLink" },
								React.createElement(
									'a',
									{ className: 'thumbnail', href: 'hvem.html', alt: 'hvem er vi' },
									React.createElement(
										'h2',
										{ className: 'text-center' },
										'Hvem er vi?'
									),
									React.createElement('img', { className: 'img img-responsive  ', src: 'img/new/hvem-er-vi.png', alt: 'Hvem står bag nemhed.dk' })
								)
							)
						),
						React.createElement(
							'div',
							{ className: 'col-md-4', key: "Left" },
							React.createElement(
								'div',
								{ className: 'panel  ', key: "videoLink" },
								React.createElement(
									'a',
									{ className: 'thumbnail', href: '#OpretSide', onClick: this.runSetup.bind(this) },
									React.createElement(
										'h2',
										{ className: 'text-center' },
										'Opret din side'
									),
									React.createElement('img', { className: 'img img-responsive', src: 'img/new/opret-din-side.png', alt: 'Hvad gør jeg?' })
								)
							)
						)
					);
				}

				if (this.state.startSetup == true && this.state.logoBannerSelected == false) {
					row = React.createElement(
						'div',
						{ id: 'rowID', className: ' ', key: "row" },
						React.createElement(JumbotronComponent, null),
						React.createElement(
							'div',
							{ key: "colmd6", className: 'col-md-6 ' },
							React.createElement(
								'div',
								{ className: 'panel ', key: "panel" },
								React.createElement(
									'div',
									{ className: 'panel-body', id: 'panelVideoId', key: "panelVideoBody" },
									React.createElement(
										'p',
										{ className: 'text-center', key: "textCenter" },
										React.createElement('iframe', { src: this.state.videoLink })
									)
								)
							)
						),
						React.createElement(
							'div',
							{ className: 'col-md-6', key: 6 },
							React.createElement(
								'div',
								{ className: 'panel ', key: "videoLink" },
								React.createElement(
									'div',
									{ className: 'panel-body', id: 'panelVideoId' },
									React.createElement(
										'div',
										{ className: 'col-md-12' },
										React.createElement(
											'div',
											{ className: 'col-md-4' },
											React.createElement(ModalHelpController, { imgUrl: 'img/user_help_logo_or_banner.png' })
										),
										React.createElement(
											'div',
											{ className: 'col-md-8' },
											React.createElement(
												'h2',
												null,
												'Har du et ',
												this.props.children
											)
										)
									),
									React.createElement('div', { className: 'col-md-12' }),
									React.createElement(
										'div',
										{ className: 'col-md-12' },
										React.createElement(
											'div',
											{ className: 'col-md-2' },
											React.createElement('img', { src: 'img/pencil_icon.png', className: 'img img-responsive ', alt: 'vores logo' })
										),
										React.createElement(
											'div',
											{ className: 'col-md-10' },
											React.createElement(
												'form',
												null,
												React.createElement(
													'p',
													{ className: 'form-group' },
													React.createElement(
														'label',
														{ className: 'radio-inline' },
														React.createElement('input', { type: 'radio', name: 'inlineRadioOptions', id: 'QuestionOneLogo', value: this.state.bval, onClick: this.checkSetLogo.bind(this) }),
														' Logo'
													)
												),
												React.createElement(
													'p',
													{ className: 'form-group' },
													React.createElement(
														'label',
														{ className: 'radio-inline' },
														React.createElement('input', { type: 'radio', name: 'inlineRadioOptions', id: 'QuestionOneBanner', value: this.state.value, onClick: this.checkSetBanner.bind(this) }),
														' Banner'
													)
												)
											)
										),
										this.state.showNextQuestion ? this.basedOnLogo() : null
									)
								)
							)
						),
						React.createElement(
							'div',
							{ className: 'col-md-12', key: "backBtn" },
							React.createElement(
								'nav',
								null,
								React.createElement(
									'ul',
									{ className: 'nav nav-pills pull-left pager' },
									React.createElement(
										'li',
										{ role: 'presentation', className: 'active ' },
										React.createElement(
											'a',
											{ href: '#', className: 'pagerLink', onClick: this.GoToFrontpage.bind(this) },
											'Tilbage til forsiden'
										)
									)
								)
							)
						)
					);
				}
			}

			return React.createElement(
				'div',
				null,
				rowSetup,
				row,
				this.state.showPreview ? this.previewFix() : null,
				this.state.createBannerMenu ? this.insertBannerMenuQuestions() : null,
				this.state.createMenu ? this.insertMenuQuestions() : null,
				this.state.createContent ? this.insertContentQuestions() : null,
				this.state.createFooter ? this.insertFooterQuestions() : null,
				this.state.createFooterOrdinary ? this.insertFooterQuestionsOrdinary() : null,
				this.state.bannerMounted ? this.basedOnBanner() : null
			);
		}
	}]);

	return ContentComponent;
}(React.Component);

var FooterComponent = function (_React$Component7) {
	_inherits(FooterComponent, _React$Component7);

	function FooterComponent(props) {
		_classCallCheck(this, FooterComponent);

		var _this7 = _possibleConstructorReturn(this, Object.getPrototypeOf(FooterComponent).call(this, props));

		_this7.state = {
			value: 'Lavet med bootstrap',
			github: 'Gemt På Github'
		};
		return _this7;
	}

	_createClass(FooterComponent, [{
		key: 'render',
		value: function render() {
			var value = this.state.value;
			var github = this.state.github;

			return React.createElement(
				'div',
				{ className: 'container-fluid' },
				React.createElement(
					'div',
					{ className: 'row' },
					React.createElement('div', { className: 'col-md-3' }),
					React.createElement(
						'div',
						{ className: 'col-md-6 text-center' },
						React.createElement(
							'nav',
							null,
							React.createElement(
								'ul',
								{ className: 'nav nav-pills pull-left pager' },
								React.createElement(
									'li',
									{ role: 'presentation', className: 'active ' },
									React.createElement(
										'a',
										{ className: 'btn btn-xs btn-success ' },
										' Lavet med ',
										this.props.framework
									),
									React.createElement(
										'a',
										{ onClick: this.handleChange.bind(this), className: 'btn btn-xs btn-success ' },
										' ',
										value,
										' '
									),
									React.createElement(
										'a',
										{ href: 'http://github.com', target: '_blank', className: 'btn btn-xs btn-success ' },
										' ',
										github,
										' '
									)
								)
							)
						)
					),
					React.createElement('div', { className: 'col-md-3' })
				)
			);
		}
	}, {
		key: 'handleChange',
		value: function handleChange(event) {
			this.setState({ value: this.state.value = 'Easter Eeg ;) ' });
		}
	}]);

	return FooterComponent;
}(React.Component);

/**"store" - er et array o.s.v data*/


var menuData = [{ title: "Forside", linkref: "#forside", targetWindow: "_self", selectedClass: "active", role: "presentation" }, { title: "Hvorfor", linkref: " hvorfor.html", targetWindow: "_blank", selectedClass: "", role: "presentation" }, { title: "Hvem er vi", linkref: " hvem.html", targetWindow: "_blank", selectedClass: "", role: "presentation" }, { title: "Opret din side", onLink: "disabled", linkref: " #setup", targetWindow: "_self", selectedClass: "", role: "presentation" }];

var _emptyArr = [];

var MyLinks = function (_React$Component8) {
	_inherits(MyLinks, _React$Component8);

	function MyLinks() {
		_classCallCheck(this, MyLinks);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(MyLinks).apply(this, arguments));
	}

	_createClass(MyLinks, [{
		key: 'render',
		value: function render() {
			return React.createElement(LinkList, { data: menuData });
		}
	}]);

	return MyLinks;
}(React.Component);

;

var LinkList = function (_React$Component9) {
	_inherits(LinkList, _React$Component9);

	function LinkList() {
		_classCallCheck(this, LinkList);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(LinkList).apply(this, arguments));
	}

	_createClass(LinkList, [{
		key: 'render',
		value: function render() {
			var recipeNodes = this.props.data.map(function (links, index) {
				return React.createElement(
					'li',
					{ key: index, className: links.selectedClass, role: links.role },
					React.createElement(
						'a',
						{ href: links.linkref, disabled: links.onLink, target: links.targetWindow },
						links.title
					)
				);
			});

			return React.createElement(
				'ul',
				{ className: 'nav navbar-nav' },
				recipeNodes
			);
		}
	}]);

	return LinkList;
}(React.Component);

;

var FooterBar = function (_React$Component10) {
	_inherits(FooterBar, _React$Component10);

	function FooterBar(props) {
		_classCallCheck(this, FooterBar);

		var _this10 = _possibleConstructorReturn(this, Object.getPrototypeOf(FooterBar).call(this, props));

		_this10.state = {
			footerText: ''
		};
		return _this10;
	}

	_createClass(FooterBar, [{
		key: 'handleAddFooterText',
		value: function handleAddFooterText() {
			var newItems = this.state.footerText.concat([prompt('Enter some text')]);
			this.setState({ footerText: newItems });
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'footer',
				{ className: 'bs-docs-footer', role: 'contentinfo' },
				React.createElement(
					'div',
					{ className: 'container' },
					React.createElement(
						'button',
						{ className: 'btn btn-info', onClick: this.handleAddFooterText.bind(this) },
						'Indsæt Tekst Til Sidefod'
					),
					React.createElement(
						'p',
						null,
						this.state.footerText
					)
				)
			);
		}
	}]);

	return FooterBar;
}(React.Component);

;

var ContentBar = function (_React$Component11) {
	_inherits(ContentBar, _React$Component11);

	function ContentBar(props) {
		_classCallCheck(this, ContentBar);

		var _this11 = _possibleConstructorReturn(this, Object.getPrototypeOf(ContentBar).call(this, props));

		_this11.state = {
			headlineText: '',
			subText: '',
			logoUrl: './img/nyt_logo.png',
			isShowing: true
		};
		return _this11;
	}

	_createClass(ContentBar, [{
		key: 'handleAddHeadline',
		value: function handleAddHeadline() {
			var newItems = this.state.headlineText.concat([prompt('Forfat en overskrift')]);
			this.setState({ headlineText: newItems });
		}
	}, {
		key: 'handleAddSubtext',
		value: function handleAddSubtext() {
			var newItems = this.state.subText.concat([prompt('Forfat en overskrift')]);
			this.setState({ subText: newItems });
		}
	}, {
		key: 'handleSetLogo',
		value: function handleSetLogo() {
			this.setState({ logoUrl: this.props.logoUrl });
		}
	}, {
		key: 'render',
		value: function render() {

			{
				this.state.isShowing ? this.handleSetLogo : null;
			}
			if (this.props.choiceOfContent == "text") {
				if (this.props.boxes == 1) {
					return React.createElement(
						'div',
						{ className: 'col-sm-12 col-md-12  ' },
						React.createElement(
							'h1',
							{ className: 'page-header' },
							'Dit Indhold'
						),
						React.createElement(
							'div',
							{ className: 'row placeholders' },
							React.createElement(
								'div',
								{ className: 'col-xs-6 col-sm-12 col-md-12 placeholder' },
								React.createElement(
									'button',
									{ className: 'btn btn-info', onClick: this.handleAddHeadline.bind(this) },
									'Indsæt Tekst Til Overskrift'
								),
								React.createElement(
									'button',
									{ className: 'btn btn-info', onClick: this.handleAddSubtext.bind(this) },
									'Indsæt Brødtekst'
								),
								React.createElement(
									'h4',
									{ onClick: this.handleAddHeadline.bind(this) },
									this.state.headlineText
								),
								React.createElement(
									'span',
									{ className: 'text-muted' },
									this.state.subText
								)
							)
						)
					);
				} else if (this.props.boxes == 2) {
					return React.createElement(
						'div',
						{ className: 'col-sm-12 col-md-12  ' },
						React.createElement(
							'h1',
							{ className: 'page-header' },
							'Dit Indhold'
						),
						React.createElement(
							'div',
							{ className: 'row placeholders' },
							React.createElement(
								'div',
								{ className: 'col-xs-6 col-sm-6 col-md-6 placeholder' },
								React.createElement(
									'button',
									{ className: 'btn btn-info', onClick: this.handleAddHeadline.bind(this) },
									'Indsæt Tekst Til Overskrift'
								),
								React.createElement(
									'button',
									{ className: 'btn btn-info', onClick: this.handleAddSubtext.bind(this) },
									'Indsæt Brødtekst'
								),
								React.createElement(
									'h4',
									{ onClick: this.handleAddHeadline.bind(this) },
									this.state.headlineText
								),
								React.createElement(
									'span',
									{ className: 'text-muted' },
									this.state.subText
								)
							),
							React.createElement(
								'div',
								{ className: 'col-xs-6 col-sm-6  col-md-6 placeholder' },
								React.createElement(
									'button',
									{ className: 'btn btn-info', onClick: this.handleAddHeadline.bind(this) },
									'Indsæt Tekst Til Overskrift'
								),
								React.createElement(
									'button',
									{ className: 'btn btn-info', onClick: this.handleAddSubtext.bind(this) },
									'Indsæt Brødtekst'
								),
								React.createElement(
									'h4',
									{ onClick: this.handleAddHeadline.bind(this) },
									this.state.headlineText
								),
								React.createElement(
									'span',
									{ className: 'text-muted' },
									this.state.subText
								)
							)
						)
					);
				} else {
					return React.createElement(
						'div',
						{ className: 'col-sm-12 col-md-12  ' },
						React.createElement(
							'h1',
							{ className: 'page-header' },
							'Dit Indhold'
						),
						React.createElement(
							'div',
							{ className: 'row placeholders' },
							React.createElement(
								'div',
								{ className: 'col-xs-6 col-sm-4 col-md-4 placeholder' },
								React.createElement(
									'button',
									{ className: 'btn btn-info', onClick: this.handleAddHeadline.bind(this) },
									'Indsæt Tekst Til Overskrift'
								),
								React.createElement(
									'button',
									{ className: 'btn btn-info', onClick: this.handleAddSubtext.bind(this) },
									'Indsæt Brødtekst'
								),
								React.createElement(
									'h4',
									{ onClick: this.handleAddHeadline.bind(this) },
									this.state.headlineText
								),
								React.createElement(
									'span',
									{ className: 'text-muted' },
									this.state.subText
								)
							),
							React.createElement(
								'div',
								{ className: 'col-xs-6 col-sm-4 col-md-4 placeholder' },
								React.createElement(
									'button',
									{ className: 'btn btn-info', onClick: this.handleAddHeadline.bind(this) },
									'Indsæt Tekst Til Overskrift'
								),
								React.createElement(
									'button',
									{ className: 'btn btn-info', onClick: this.handleAddSubtext.bind(this) },
									'Indsæt Brødtekst'
								),
								React.createElement(
									'h4',
									{ onClick: this.handleAddHeadline.bind(this) },
									this.state.headlineText
								),
								React.createElement(
									'span',
									{ className: 'text-muted' },
									this.state.subText
								)
							),
							React.createElement(
								'div',
								{ className: 'col-xs-6 col-sm-4 col-md-4 placeholder' },
								React.createElement(
									'button',
									{ className: 'btn btn-info', onClick: this.handleAddHeadline.bind(this) },
									'Indsæt Tekst Til Overskrift'
								),
								React.createElement(
									'button',
									{ className: 'btn btn-info', onClick: this.handleAddSubtext.bind(this) },
									'Indsæt Brødtekst'
								),
								React.createElement(
									'h4',
									{ onClick: this.handleAddHeadline.bind(this) },
									this.state.headlineText
								),
								React.createElement(
									'span',
									{ className: 'text-muted' },
									this.state.subText
								)
							)
						)
					);
				}
			} else {
				if (this.props.boxes == 1) {
					return React.createElement(
						'div',
						{ className: 'col-sm-12 col-md-12  ' },
						React.createElement(
							'h1',
							{ className: 'page-header' },
							'Dit Indhold'
						),
						React.createElement(
							'div',
							{ className: 'row placeholders' },
							React.createElement(
								'div',
								{ className: 'col-xs-6 col-sm-12 col-md-12 placeholder' },
								React.createElement(DropzoneDemo, null),
								React.createElement('img', { className: 'img img-responsive', src: this.state.logoUrl, alt: this.props.logoUrl }),
								React.createElement(
									'button',
									{ className: 'btn btn-info', onClick: this.handleAddHeadline.bind(this) },
									'Indsæt Tekst Til Overskrift'
								),
								React.createElement(
									'button',
									{ className: 'btn btn-info', onClick: this.handleAddSubtext.bind(this) },
									'Indsæt Brødtekst'
								),
								React.createElement(
									'h4',
									{ onClick: this.handleAddHeadline.bind(this) },
									this.state.headlineText
								),
								React.createElement(
									'span',
									{ className: 'text-muted' },
									this.state.subText
								)
							)
						)
					);
				} else if (this.props.boxes == 2) {
					return React.createElement(
						'div',
						{ className: 'col-sm-12 col-md-12  ' },
						React.createElement(
							'h1',
							{ className: 'page-header' },
							'Dit Indhold'
						),
						React.createElement(
							'div',
							{ className: 'row placeholders' },
							React.createElement(
								'div',
								{ className: 'col-xs-6 col-sm-6 col-md-6 placeholder' },
								React.createElement(DropzoneDemo, null),
								React.createElement('img', { className: 'img img-responsive', src: this.props.logoUrl, alt: this.props.logoUrl }),
								React.createElement(
									'button',
									{ className: 'btn btn-info', onClick: this.handleAddHeadline.bind(this) },
									'Indsæt Tekst Til Overskrift'
								),
								React.createElement(
									'button',
									{ className: 'btn btn-info', onClick: this.handleAddSubtext.bind(this) },
									'Indsæt Brødtekst'
								),
								React.createElement(
									'h4',
									{ onClick: this.handleAddHeadline.bind(this) },
									this.state.headlineText
								),
								React.createElement(
									'span',
									{ className: 'text-muted' },
									this.state.subText
								)
							),
							React.createElement(
								'div',
								{ className: 'col-xs-6 col-sm-6  col-md-6 placeholder' },
								React.createElement(DropzoneDemo, null),
								React.createElement('img', { className: 'img img-responsive', src: this.props.logoUrl, alt: this.props.logoUrl }),
								React.createElement(
									'button',
									{ className: 'btn btn-info', onClick: this.handleAddHeadline.bind(this) },
									'Indsæt Tekst Til Overskrift'
								),
								React.createElement(
									'button',
									{ className: 'btn btn-info', onClick: this.handleAddSubtext.bind(this) },
									'Indsæt Brødtekst'
								),
								React.createElement(
									'h4',
									{ onClick: this.handleAddHeadline.bind(this) },
									this.state.headlineText
								),
								React.createElement(
									'span',
									{ className: 'text-muted' },
									this.state.subText
								)
							)
						)
					);
				} else {
					return React.createElement(
						'div',
						{ className: 'col-sm-12 col-md-12  ' },
						React.createElement(
							'h1',
							{ className: 'page-header' },
							'Dit Indhold'
						),
						React.createElement(
							'div',
							{ className: 'row placeholders' },
							React.createElement(
								'div',
								{ className: 'col-xs-6 col-sm-4 col-md-4 placeholder' },
								React.createElement(DropzoneDemo, null),
								React.createElement('img', { className: 'img img-responsive', src: this.props.logoUrl, alt: this.props.logoUrl }),
								React.createElement(
									'button',
									{ className: 'btn btn-info', onClick: this.handleAddHeadline.bind(this) },
									'Indsæt Tekst Til Overskrift'
								),
								React.createElement(
									'button',
									{ className: 'btn btn-info', onClick: this.handleAddSubtext.bind(this) },
									'Indsæt Brødtekst'
								),
								React.createElement(
									'h4',
									{ onClick: this.handleAddHeadline.bind(this) },
									this.state.headlineText
								),
								React.createElement(
									'span',
									{ className: 'text-muted' },
									this.state.subText
								)
							),
							React.createElement(
								'div',
								{ className: 'col-xs-6 col-sm-4 col-md-4 placeholder' },
								React.createElement(DropzoneDemo, null),
								React.createElement('img', { className: 'img img-responsive', src: this.props.logoUrl, alt: this.props.logoUrl }),
								React.createElement(
									'button',
									{ className: 'btn btn-info', onClick: this.handleAddHeadline.bind(this) },
									'Indsæt Tekst Til Overskrift'
								),
								React.createElement(
									'button',
									{ className: 'btn btn-info', onClick: this.handleAddSubtext.bind(this) },
									'Indsæt Brødtekst'
								),
								React.createElement(
									'h4',
									{ onClick: this.handleAddHeadline.bind(this) },
									this.state.headlineText
								),
								React.createElement(
									'span',
									{ className: 'text-muted' },
									this.state.subText
								)
							),
							React.createElement(
								'div',
								{ className: 'col-xs-6 col-sm-4 col-md-4 placeholder' },
								React.createElement(DropzoneDemo, null),
								React.createElement('img', { className: 'img img-responsive', src: this.props.logoUrl, alt: this.props.logoUrl }),
								React.createElement(
									'button',
									{ className: 'btn btn-info', onClick: this.handleAddHeadline.bind(this) },
									'Indsæt Tekst Til Overskrift'
								),
								React.createElement(
									'button',
									{ className: 'btn btn-info', onClick: this.handleAddSubtext.bind(this) },
									'Indsæt Brødtekst'
								),
								React.createElement(
									'h4',
									{ onClick: this.handleAddHeadline.bind(this) },
									this.state.headlineText
								),
								React.createElement(
									'span',
									{ className: 'text-muted' },
									this.state.subText
								)
							)
						)
					);
				}
			}
		}
	}]);

	return ContentBar;
}(React.Component);

;

var ProgBar = function (_React$Component12) {
	_inherits(ProgBar, _React$Component12);

	function ProgBar() {
		_classCallCheck(this, ProgBar);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(ProgBar).apply(this, arguments));
	}

	_createClass(ProgBar, [{
		key: 'render',
		value: function render() {
			var progressStyle = {
				width: this.props.width + '%'

			};

			return React.createElement(
				'div',
				{ key: "colmdOptionsShowProgBar", className: ' col-md-12  col-sm-12   sidebar-optionpaneltop  ' },
				React.createElement(
					'div',
					{ className: 'progress' },
					React.createElement(
						'div',
						{ className: 'progress-bar progress-bar-info ', role: 'progressbar', 'aria-valuenow': progressStyle, 'aria-valuemin': '0', 'aria-valuemax': '100', style: progressStyle },
						this.props.progText
					)
				)
			);
		}
	}]);

	return ProgBar;
}(React.Component);

;

var myProgressbar = function (_React$Component13) {
	_inherits(myProgressbar, _React$Component13);

	function myProgressbar() {
		_classCallCheck(this, myProgressbar);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(myProgressbar).apply(this, arguments));
	}

	_createClass(myProgressbar, [{
		key: 'render',
		value: function render() {
			return React.createElement(ReactProgressBar, { width: '10' });
		}
	}]);

	return myProgressbar;
}(React.Component);

;

var ReactProgressBar = function (_React$Component14) {
	_inherits(ReactProgressBar, _React$Component14);

	function ReactProgressBar() {
		_classCallCheck(this, ReactProgressBar);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(ReactProgressBar).apply(this, arguments));
	}

	_createClass(ReactProgressBar, [{
		key: 'render',
		value: function render() {

			var progressStyle = {
				width: this.props.width

			};

			return React.createElement(
				'div',
				{ key: "colmdOptionsShowBar", className: ' col-md-12  col-sm-12   sidebar-optionpaneltop  ' },
				React.createElement(
					'div',
					{ className: 'progress' },
					React.createElement(
						'div',
						{ className: 'progress-bar', role: 'progressbar', 'aria-valuenow': '50', 'aria-valuemin': '0', 'aria-valuemax': '100', style: progressStyle },
						this.props.progText
					)
				)
			);
		}
	}]);

	return ReactProgressBar;
}(React.Component);

;

var ErrorMessages = function (_React$Component15) {
	_inherits(ErrorMessages, _React$Component15);

	function ErrorMessages() {
		_classCallCheck(this, ErrorMessages);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(ErrorMessages).apply(this, arguments));
	}

	_createClass(ErrorMessages, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				{ className: 'bs-callout bs-callout-warning', id: 'callout-alerts-dismiss-use-button' },
				React.createElement(
					'h4',
					null,
					'Whoops'
				),
				React.createElement(
					'p',
					null,
					React.createElement(
						'code',
						null,
						this.props.Type
					)
				)
			);
		}
	}]);

	return ErrorMessages;
}(React.Component);

;

/** McFly */

var Flux = new McFly();

var supportMultiple = typeof document !== 'undefined' && document && document.createElement ? 'multiple' in document.createElement('input') : true;

var Dropzone = function (_React$Component16) {
	_inherits(Dropzone, _React$Component16);

	function Dropzone(props, context) {
		_classCallCheck(this, Dropzone);

		var _this16 = _possibleConstructorReturn(this, Object.getPrototypeOf(Dropzone).call(this, props, context));

		_this16.onClick = _this16.onClick.bind(_this16);
		_this16.onDragEnter = _this16.onDragEnter.bind(_this16);
		_this16.onDragLeave = _this16.onDragLeave.bind(_this16);
		_this16.onDragOver = _this16.onDragOver.bind(_this16);
		_this16.onDrop = _this16.onDrop.bind(_this16);

		_this16.state = {
			isDragActive: false
		};
		return _this16;
	}

	_createClass(Dropzone, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.enterCounter = 0;
		}
	}, {
		key: 'onDragEnter',
		value: function onDragEnter(e) {
			e.preventDefault();

			// Count the dropzone and any children that are entered.
			++this.enterCounter;

			// This is tricky. During the drag even the dataTransfer.files is null
			// But Chrome implements some drag store, which is accesible via dataTransfer.items
			var dataTransferItems = e.dataTransfer && e.dataTransfer.items ? e.dataTransfer.items : [];

			// Now we need to convert the DataTransferList to Array
			var allFilesAccepted = this.allFilesAccepted(Array.prototype.slice.call(dataTransferItems));

			this.setState({
				isDragActive: allFilesAccepted,
				isDragReject: !allFilesAccepted
			});

			if (this.props.onDragEnter) {
				this.props.onDragEnter.call(this, e);
			}
		}
	}, {
		key: 'onDragOver',
		value: function onDragOver(e) {
			e.preventDefault();
			e.stopPropagation();
			return false;
		}
	}, {
		key: 'onDragLeave',
		value: function onDragLeave(e) {
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
	}, {
		key: 'onDrop',
		value: function onDrop(e) {
			e.preventDefault();

			// Reset the counter along with the drag on a drop.
			this.enterCounter = 0;

			this.setState({
				isDragActive: false,
				isDragReject: false
			});

			var droppedFiles = e.dataTransfer ? e.dataTransfer.files : e.target.files;
			var max = this.props.multiple ? droppedFiles.length : Math.min(droppedFiles.length, 1);
			var files = [];

			for (var i = 0; i < max; i++) {
				var file = droppedFiles[i];
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
	}, {
		key: 'onClick',
		value: function onClick() {
			if (!this.props.disableClick) {
				this.open();
			}
		}
	}, {
		key: 'allFilesAccepted',
		value: function allFilesAccepted(files) {
			var _this17 = this;

			return files.every(function (file) {
				return accepts(file, _this17.props.accept);
			});
		}
	}, {
		key: 'open',
		value: function open() {
			this.fileInputEl.value = null;
			this.fileInputEl.click();
		}
	}, {
		key: 'render',
		value: function render() {
			var _props,
			    _this18 = this;

			var accept = void 0;
			var activeClassName = void 0;
			var inputProps = void 0;
			var multiple = void 0;
			var rejectClassName = void 0;
			var rest = void 0;

			var className = void 0;
			var rejectStyle = void 0;
			var style = void 0;
			var activeStyle = void 0;

			var propAttributes = (_props = this.props, accept = _props.accept, activeClassName = _props.activeClassName, inputProps = _props.inputProps, multiple = _props.multiple, name = _props.name, rejectClassName = _props.rejectClassName, rest = _props.rest, _props);

			var _state = this.state;
			var isDragActive = _state.isDragActive;
			var isDragReject = _state.isDragReject;


			className = className || '';

			if (isDragActive && activeClassName) {
				className += ' ' + activeClassName;
			}
			if (isDragReject && rejectClassName) {
				className += ' ' + rejectClassName;
			}

			if (!className && !style && !activeStyle && !rejectStyle) {
				style = {};
				activeStyle = {};
				rejectStyle = {
					borderStyle: 'solid',
					backgroundColor: '#ffdddd'
				};
			}

			var appliedStyle;
			if (activeStyle && isDragActive) {

				appliedStyle = {
					style: style,
					activeStyle: activeStyle
				};
			} else if (rejectStyle && isDragReject) {
				appliedStyle = {
					style: style,
					rejectStyle: rejectStyle
				};
			} else {
				appliedStyle = {
					style: style
				};
			}

			var inputAttributes = [{
				accept: '',
				type: 'file',
				style: { display: 'none' },
				multiple: supportMultiple && multiple,
				ref: function ref(el) {
					return _this18.fileInputEl = el;
				},
				onChange: this.onDrop
			}];

			var myStyle = {
				display: 'block'
			};

			if (name && name.length) {
				inputAttributes.name = name;
			}

			var inputAttr = React.createElement(
				'div',
				{ className: 'container' },
				React.createElement(
					'form',
					{ role: 'form' },
					React.createElement(
						'div',
						{ className: 'form-group' },
						React.createElement('input', { className: 'btn btn-default', accept: '', onChange: this.onDrop.bind(this), ref: function ref(el) {
								return _this18.fileInputEl = el;
							}, type: 'file', multiple: supportMultiple && multiple })
					)
				)
			);
			return React.createElement(
				'div',
				{ onClick: this.onClick, onDragEnter: this.onDragEnter, onDragOver: this.onDragOver, onDragLeave: this.onDragLeave, onDrop: this.onDrop },
				inputAttr,
				this.props.children
			);
		}
	}]);

	return Dropzone;
}(React.Component);

// FLUX
/** McFly */

/** Store */


var shModal = false;

function setModalState(text) {
	shModal = text;
}

var ModalStore = Flux.createStore({
	getModal: function getModal() {
		return shModal;
	}
}, function (payload) {
	if (payload.actionType === "SHOW_MODAL") {
		setModalState(payload.text);
		ModalStore.emitChange();
	}
	if (payload.actionType === "SHOW_HELP_MODAL") {

		setModalState(payload.text);
		ModalStore.emitChange();
	}
});

/** Actions */

var ModalActions = Flux.createActions({
	showModal: function showModal(text) {
		return {
			actionType: "SHOW_MODAL",
			text: text
		};
	},
	showHelpModal: function showHelpModal(text) {
		return {
			actionType: "SHOW_HELP_MODAL",
			text: text
		};
	}
});

function getModal() {
	return {
		modal: ModalStore.getModal()
	};
}

/** Controller View */
var ModalController = React.createClass({
	displayName: 'ModalController',

	mixins: [ModalStore.mixin],
	getInitialState: function getInitialState() {
		return getModal();
	},
	storeDidChange: function storeDidChange() {
		this.setState(getModal());
	},
	render: function render() {
		return React.createElement(ModalComponent, { modal: this.state.modal });
	}
});

var ModalHelpController = React.createClass({
	displayName: 'ModalHelpController',

	mixins: [ModalStore.mixin],
	getInitialState: function getInitialState() {
		return getModal();
	},
	storeDidChange: function storeDidChange() {
		this.setState(getModal());
	},
	render: function render() {
		return React.createElement(ModalHelpComponent, { imgUrl: this.props.imgUrl, modal: this.state.modal });
	}
});

/** Component */

var ModalHelpComponent = function (_React$Component17) {
	_inherits(ModalHelpComponent, _React$Component17);

	function ModalHelpComponent(props) {
		_classCallCheck(this, ModalHelpComponent);

		var _this19 = _possibleConstructorReturn(this, Object.getPrototypeOf(ModalHelpComponent).call(this, props));

		_this19.state = {
			mountedUserHelp: true
		};
		return _this19;
	}

	_createClass(ModalHelpComponent, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.setState({ mountedUserHelp: true });
		}
	}, {
		key: 'disableWarning',
		value: function disableWarning() {
			this.setState({ mountedUserHelp: false });
		}
	}, {
		key: 'showMyPopup',
		value: function showMyPopup() {

			var divStyle = {
				display: 'block'
			};
			var fade = {
				display: 'block'
			};

			var popoverStyle = {};
			var topStyle = {};

			return React.createElement(
				'div',
				{ role: 'tooltip' },
				React.createElement('img', { src: this.props.imgUrl, onClick: this.showHelpUserModal.bind(this, true), className: 'img img-responsive img-thumbnail', alt: 'vores logo' })
			);
		}
	}, {
		key: 'showHelpUserModal',
		value: function showHelpUserModal(visibleModal) {

			ModalActions.showHelpModal(visibleModal);
		}
	}, {
		key: 'render',
		value: function render() {
			var divStyle = {
				display: 'block'
			};
			var fade = {
				display: 'block'
			};

			var modalHelpMessage;

			if (this.props.modal == true) {
				return modalHelpMessage = React.createElement(
					'div',
					{ id: 'light', className: 'black_overlay', onClick: this.showHelpUserModal.bind(this, false), style: divStyle, ClassName: 'white_content' },
					React.createElement(
						'div',
						{ id: 'fade', style: fade },
						React.createElement(
							'div',
							{ className: 'col-md-12  ' },
							React.createElement(
								'div',
								{ className: 'modal modal_example', style: fade, onClick: this.showHelpUserModal.bind(this, false), tabindex: '-1', role: 'dialog' },
								React.createElement(
									'div',
									{ className: 'modal-dialog' },
									React.createElement(
										'div',
										{ className: 'modal-content' },
										React.createElement(
											'div',
											{ className: 'modal-header' },
											React.createElement(
												'h4',
												{ className: 'modal-title' },
												'Billede Eksempel'
											)
										),
										React.createElement(
											'div',
											{ className: 'modal-body' },
											React.createElement(
												'p',
												null,
												React.createElement('img', { src: this.props.imgUrl, className: 'img img-responsive ', alt: 'Hjælp til brugeren omkring valg af banner og slogan' })
											)
										),
										React.createElement(
											'div',
											{ className: 'modal-footer' },
											React.createElement(
												'button',
												{ type: 'button', className: 'btn btn-default', 'data-dismiss': 'modal' },
												'Luk Boksen'
											)
										)
									)
								)
							)
						)
					)
				);
			} else {
				return React.createElement(
					'div',
					null,
					this.state.mountedUserHelp ? this.showMyPopup() : null
				);
			}

			return React.createElement(
				'div',
				{ className: 'container-fluid' },
				React.createElement(
					'div',
					{ className: 'row' },
					modalHelpMessage
				)
			);
		}
	}]);

	return ModalHelpComponent;
}(React.Component);

;

/** Component */

var ModalComponent = function (_React$Component18) {
	_inherits(ModalComponent, _React$Component18);

	function ModalComponent(props) {
		_classCallCheck(this, ModalComponent);

		var _this20 = _possibleConstructorReturn(this, Object.getPrototypeOf(ModalComponent).call(this, props));

		_this20.state = {
			mounted: true
		};
		return _this20;
	}

	_createClass(ModalComponent, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.setState({ mounted: true });
		}
	}, {
		key: 'disableWarning',
		value: function disableWarning() {
			this.setState({ mounted: false });
		}
	}, {
		key: 'showMyPopup',
		value: function showMyPopup() {

			var divStyle = {
				display: 'block'
			};
			var fade = {
				display: 'block'
			};

			var popoverStyle = {
				display: 'block',
				top: '26px',
				left: '232.167px'
			};
			var topStyle = {
				top: "50%"
			};
			return React.createElement(
				'div',
				{ style: popoverStyle, id: 'popover423043', className: 'popover fade right in', role: 'tooltip' },
				React.createElement('div', { style: topStyle, className: 'arrow' }),
				React.createElement(
					'h3',
					{ className: 'popover-title' },
					'Rettigheder',
					React.createElement(
						'button',
						{ 'aria-label': 'Close', 'data-dismiss': 'modal', onClick: this.disableWarning.bind(this), 'class': 'close', type: 'button' },
						React.createElement(
							'span',
							{ 'aria-hidden': 'true' },
							'×'
						)
					)
				),
				React.createElement(
					'div',
					{ className: 'popover-content' },
					React.createElement(
						'button',
						{ className: 'btn btn-info', onClick: this.showModal.bind(this, true) },
						'Hvad betyder Rettigheder?'
					)
				)
			);
		}
	}, {
		key: 'showModal',
		value: function showModal(visibleModal) {

			RecipeActions.showModal(visibleModal);
		}
	}, {
		key: 'render',
		value: function render() {
			var divStyle = {
				display: 'block'
			};
			var fade = {
				display: 'block'
			};

			var modalMessage;

			if (this.props.modal == true) {

				return modalMessage = React.createElement(
					'div',
					{ id: 'light', className: 'black_overlay', onClick: this.showModal.bind(this, false), style: divStyle, ClassName: 'white_content' },
					React.createElement(
						'div',
						{ id: 'fade', style: fade },
						React.createElement(
							'div',
							{ className: 'col-md-3 sidebar-optionpaneltop ' },
							React.createElement(
								'div',
								{ className: 'modal modal_example', style: fade, onClick: this.showModal.bind(this, false), tabindex: '-1', role: 'dialog' },
								React.createElement(
									'div',
									{ className: 'modal-dialog' },
									React.createElement(
										'div',
										{ className: 'modal-content' },
										React.createElement(
											'div',
											{ className: 'modal-header' },
											React.createElement(
												'button',
												{ type: 'button', className: 'close', 'data-dismiss': 'modal', 'aria-label': 'Close' },
												React.createElement(
													'span',
													{ 'aria-hidden': 'true' },
													'×'
												)
											),
											React.createElement(
												'h4',
												{ className: 'modal-title' },
												'Advarsel - Copyright / Rettigheder'
											)
										),
										React.createElement(
											'div',
											{ className: 'modal-body' },
											React.createElement(
												'p',
												null,
												'Hej - Vi skal gøre opmærksom på, at det er strengt ulovligt, at benytte eller uploade billeder som man ikke har tilladelse til at bruge. Copyright! Denne side fraskriver sig hermed et hvert (med)ansvar for brugen af andres værker.'
											)
										),
										React.createElement(
											'div',
											{ className: 'modal-footer' },
											React.createElement(
												'a',
												{ type: 'button', className: 'btn btn-info', href: 'http://kum.dk/kulturpolitik/ophavsret/billedkunst-og-fotografier/', target: '_blank', 'data-dismiss': 'modal' },
												'Læs mere'
											),
											React.createElement(
												'button',
												{ type: 'button', className: 'btn btn-default', 'data-dismiss': 'modal' },
												'Luk Boksen'
											)
										)
									)
								)
							)
						)
					)
				);
			} else {
				return React.createElement(
					'div',
					null,
					this.state.mounted ? this.showMyPopup() : null
				);
			}

			return React.createElement(
				'div',
				{ className: 'container-fluid' },
				React.createElement(
					'div',
					{ className: 'row' },
					modalMessage
				)
			);
		}
	}]);

	return ModalComponent;
}(React.Component);

;

var DropzoneDemo = function (_React$Component19) {
	_inherits(DropzoneDemo, _React$Component19);

	function DropzoneDemo(props) {
		_classCallCheck(this, DropzoneDemo);

		var _this21 = _possibleConstructorReturn(this, Object.getPrototypeOf(DropzoneDemo).call(this, props));

		_this21.state = {
			files: []

		};
		return _this21;
	}

	_createClass(DropzoneDemo, [{
		key: 'onDrop',
		value: function onDrop(files) {

			this.setState({
				files: files
			});
		}
	}, {
		key: 'onOpenClick',
		value: function onOpenClick() {
			this.refs.dropzone.open();
		}
	}, {
		key: 'render',
		value: function render() {

			return React.createElement(
				'div',
				null,
				React.createElement(Dropzone, { ref: 'dropzone', onDrop: this.onDrop.bind(this) }),
				this.state.files.length > 0 ? React.createElement(
					'div',
					null,
					React.createElement(
						'div',
						null,
						this.state.files.map(function (file) {
							return React.createElement('img', { className: 'img img-responsive', src: file.preview });
						}),
						React.createElement(ModalController, null)
					)
				) : null
			);
		}
	}]);

	return DropzoneDemo;
}(React.Component);

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

ReactDOM.render(React.createElement(MenuComponent, null), document.getElementById('menuId'));

ReactDOM.render(React.createElement(
	ContentComponent,
	null,
	'Logo eller Banner'
), document.getElementById('insertContentStuff'));

ReactDOM.render(React.createElement(
	'div',
	null,
	React.createElement(
		FooterComponent,
		{ framework: 'ReactJS', copyright: '2016' },
		'Powered by Bootstrap'
	)
), document.getElementById('footer'));