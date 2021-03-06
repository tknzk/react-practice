
/** @jsx React.DOM */

App = React.createClass({
  getInitialState: function() {
    return {
      items: [
        { text: "Foo" },
        { text: "Bar" },
        { text: "Buzz" }
      ]
    };
  },
  
  render: function() {
    return <div>
      <div>
        {this.state.items.map(function(item) {
          return <div className="item">{item.text}</div>;
        })}
      </div>
    </div>;
  }
});


