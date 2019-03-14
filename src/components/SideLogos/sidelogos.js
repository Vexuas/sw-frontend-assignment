import React, { Component } from "react";
import "./sidelogos.css";

class SideLogos extends Component {
  render() {
    return (
      <div>
        {this.props.sideLogos.map(item => {
          if (this.props.sidenavTitle === item.title) {
            return (
              <div id="swTest-currentPage" key={item.id} title={item.title}>
                <img
                  src={item.img_src}
                  alt={item.img_alt}
                  id="swTest-currentPageImg"
                />
              </div>
            );
          } else {
            return (
              <div className="swTest-menu" key={item.id} title={item.title}>
                <img
                  src={item.img_src}
                  alt={item.img_alt}
                  className="swTest-menu-img"
                />
              </div>
            );
          }
        })}
      </div>
    );
  }
}

export default SideLogos;
