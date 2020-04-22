const Highlight = ({color, children}) => (
  <span className={`relative highlight highlight-${color}`}>
    <span className="relative z-2">{children}</span>
  </span>
)

const Intro = () =>
<div className="m-auto-ns f4 f3-m f2-1 tc w-80-l normal">
  <div className="mb3 mb4-ns">
    This website xxx <Highlight color='aqua'>description</Highlight>
  </div>
  <div>
    <p>This website xxx <Highlight color='yellow'>description</Highlight></p>
    <p>This website xxx <Highlight color='blue'>description</Highlight></p>
    <p>This website xxx <Highlight color='pink'>description</Highlight></p>
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

const Attraction = ({title, description, image, className}) => (
  <div className={className}>
    <h1>{title}</h1>
    <p>{description}</p>
    <img src={`../images/${image}`} />
  </div>
);
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
