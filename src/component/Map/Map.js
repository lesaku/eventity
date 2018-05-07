import React, { Component } from 'react';
import { spin } from 'antd';
import { GoogleApiWrapper } from 'google-maps-react';

class BasicMap extends Component {
  constructor(props) {
    super(props);
    this.loadMap = this.loadMap.bind(this);
    this.state = {
      center: { lat : 40.783060, lng: -73.971249 }, // 40.783060, -73.971249
      zoom: 13,
      data: [],
      infoWindow: null,
      isLoad: false
    };
  }
  componentDidMount(){
      this.setState({
          isLoad: true
      })
  }
  loadMap(element) {
    const { google } = this.props;
    if (!element || !google) return;
    new google.maps.Map(element, {
      zoom: this.state.zoom,
      center: this.state.center,
      scrollwheel: false,
      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        position: google.maps.ControlPosition.TOP_RIGHT,
      },
    });
    
  }
  
  render() {
    const { loaded } = this.props;
    
    return (
      <div>
          {console.log(this.props.data[this.props.curIndex].venue)}
        {loaded ? (
            <div
              className="isoGoogleMap"
              style={{ height: '820px', width: '100%' }}
              ref={this.loadMap}
            />
        ) : (
          <div><spin/></div>
        )}
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey:   '',
})(BasicMap);
