import React,{Component} from 'react'

class Frontpage extends Component {
  render() {
    return (
      <div className="fp">
        <div className="fp_shadow fp_title">
          <div className="fp_title_text_white">Offering wide</div>
          <div className="fp_title_text_white">range of</div>
          <div className="fp_title_text_blue">Precision industrial</div>
          <div className="fp_title_text_blue">controllers</div>
        </div>
        <div className="fp_img">
          <img className="fp_al808" src="images/fp_al808.png"></img>
          <div className="fp_img_text">AL808 Temperature Controller Series</div>
        </div>
      </div>
    )
  }
}
export default Frontpage
