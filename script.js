function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const { Component } = React;

const src = 'https://images.unsplash.com/photo-1444065381814-865dc9da92c0';
const imgwidth = 3000;
const imgheight = 2000;
const scale = 2;
class Zoom extends Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      wrapper: {
        backgroundImage: `url(${src + 1})`,
        backgroundPosition: '0% 0%' },

      img: {
        width: '100%' } });_defineProperty(this, "handleMouseMove",



    e => {
      const { left, top, width, height } = e.target.getBoundingClientRect();
      //console.log(e.target.getBoundingClientRect());
      const x = 100 / scale - (e.pageX - left) / width * 100 * (1 * scale - width / imgwidth);
      const y = 100 / scale - (e.pageY - top) / height * 100 * (1 * scale - height / imgheight);
      //this.setState({wrapper:{...this.state.wrapper, backgroundPosition: `${x}% ${y}%`}})
      this.setState({ img: { ...this.state.img, transform: `translate(${x}%, ${y}%) scale(${scale})` } });
      console.log(x, " ", y, " ", left, " ", top, " ", width, " ", height);
    });_defineProperty(this, "handleMouseOver",
    e => {
      this.setState({ img: { ...this.state.img, width: imgwidth + 'px', height: imgheight + 'px' } });
    });_defineProperty(this, "handleMouseOut",
    e => {
      this.setState({ img: { ...this.state.img, width: '100%', height: '100%', transform: 'none' } });
    });_defineProperty(this, "render",
    () =>
    React.createElement("div", { class: "zoom", onMouseMove: this.handleMouseMove, style: this.state.wrapper, onMouseOver: this.handleMouseOver, onMouseOut: this.handleMouseOut },
    React.createElement("img", { style: this.state.img, src: src })));}}



ReactDOM.render(React.createElement(Zoom, null), document.getElementById('root'));
