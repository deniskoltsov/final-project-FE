import React from 'react'
const PSMarker = React.createClass({
    render: function() {
        var K_WIDTH = 20;
        var K_HEIGHT = 20;
        var PSMarkerStyle = {
          position: 'absolute',
          width: K_WIDTH,
          height: K_HEIGHT,
          left: -K_WIDTH / 2,
          top: -K_HEIGHT / 2,
          border: '2px solid #f44336',
          borderRadius: K_HEIGHT,
          backgroundColor: 'white',
          textAlign: 'center',
          color: '#3f51b5',
          fontSize: 10,
          fontWeight: 'bold',
          padding: 2
        };
        return (
            <div style={PSMarkerStyle}>
              A
            </div>
        )
    }
});
export default PSMarker
