const Highlight = ({color, children}) => (
  <span className={`relative highlight highlight-${color}`}>
    <span className="relative z-2">{children}</span>
  </span>
)

const Intro = () =>
<div className="m-auto-ns f2 f3-m f2-1 tc w-80-l normal">
  <div className="mb3 mb4-ns">
    What do i <Highlight color='aqua'>want?</Highlight>
  </div>
  <div>
    <p>Where should i <Highlight color='yellow'>go?</Highlight></p>
    <p>What should i <Highlight color='blue'>do?</Highlight></p>
    <p>Why should i <Highlight color='pink'>go?</Highlight></p>
  </div>
</div>

//Destructuring
const NavItem = ({ className, href, children, logo}) => (
  <li className={`mh2-ns f6 f4-1 tc ${className}`}>
    <a className='white no-underline' href={href}>
      {logo ? <img src="../images/logo.svg" className="db center logo" /> : children }
    </a>
  </li>
)

const Nav = () => (
  <nav className='pt3 pt4-ns mb4 mb0-ns'>
    <ul className='list flex flex-wrap flex-nowrap-ns justify-between items-center pa0 ma0'>
      { menu.map(item =>
        <NavItem {...item}/>
      )}
    </ul>
  </nav>
);

const Overlay = ({showInfo, title, description}) => (
  <div className="absolute w-100 h-100 flex items-center pa3 pa4-ns bg-aqua overlay"
    style={{
      transform: showInfo ? 'none' : 'translateY(-100%)'
    }}
    >
      <div>
        <h1 className="f4 f3-ns mt0 mb2 regular black normal lh-title">{title}</h1>
        <p className="lh-title lh-copy-ns mv0 black f6 measure-l">{description}</p>
      </div>
    </div>
)


class Attraction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showInfo: false
    };
    this.toggleInfo = this.toggleInfo.bind(this);
    this.closeInfo = this.closeInfo.bind(this);
  }

  toggleInfo() {
    this.setState((prevState, props) => {
      return { showInfo: !prevState.showInfo }
    });
  }
  closeInfo() {
    this.setState({
      showInfo: false
    })
  }
  render() {

  const {title, link, description, className, image} = this.props
  const { showInfo}= this.state
    return (
        <div
        className={`ph4 ph5-ns ph0-l mb4 mb5-ns w-100 overflow-hidden pointer attraction ${className}`}
        onMouseEnter={ this.toggleInfo }
        onMouseLeave={ this.closeInfo }
        >
        <div className="relative">
        <Overlay {...this.props} {...this.state}/>
          <a href={link ? `${link}` : ""}><img src={`../images/${image}`} className="db" /></a>
        </div>
      </div>
    )
  }
}

const App = () => (
  <div>
    <div className="min-vh-100 ph4 flex flex-column">
      <Nav />
      <Intro />
    </div>
    <div className="flex flex-wrap container">
      {attractions.map(attraction => <Attraction {...attraction} />)}
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
