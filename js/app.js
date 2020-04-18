const Highlight = props => (
  <span className={`relative highlight highlight-${props.color}`}>
    <span className="relative z-2">{props.children}</span>
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



const Nav = () => (
  <nav className='pt3 pt4-ns mb4 mb0-ns'>
    <ul className='list flex flex-wrap flex-nowrap-ns justify-between items-center pa0 ma0'>
      { menu.map(item =>
        <li className={item.className}>
        <a href="item.href">{item.children}</a>
        </li>
      )}
    </ul>
  </nav>
);

const App = () => (
  <div>
    <div className="min-vh-100 ph4 flex flex-column">
    <Nav />
    <Intro />
    </div>
    <div className="flex flex-wrap container">
    </div>
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'));
