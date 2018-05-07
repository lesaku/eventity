import React from 'react';
import DatePick from '../../component/JSON/Date';
import Map from '../../component/Map/Map';
import { Container, Row, Col, Select, Card , Button, Tag} from 'antd';
import '../../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom'
const Option = Select.Option;

export default class test extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data : [],
      dataCount : 0,
      page : 0,
      currentData: {},
      venue: [],
      curIndex : 0
    }
  }
  async componentDidMount() {
    try {
      while(this.state.page === 0 || this.state.dataCount === 100 ){
      const fet = await axios.post('https://api.allevents.in/events/list/?city=Chiang Mai&state=CM&country=Thailand&page='+this.state.page, {},
         { headers: {'Ocp-Apim-Subscription-Key': '6a81714eadb44aadbd559560c0e97dc5' }})
         console.log(fet.data.data);
         this.setState({
           page : this.state.page + 1,
           data : [...this.state.data,...fet.data.data],
           dataCount : fet.data.count,
         })
         //console.log(this.state.data)
         //console.log(this.state.currentData.venue.latitude);
        }  
       }catch(err){
        console.log(err);
       }
       this.setState({
         curData: this.state.data[0]
       })
      }

showevent = (data,index) =>{
  this.setState({
    currentData : this.state.data[index],
    curIndex : index
  })
  console.log(this.state.data[index].venue.latitude);
}
  render() {
    const datas = this.state.data;
    let card = null;
    card = (
    <div className='box'>
      {datas.map((data, index) => {
        return (
            <div>
                <Card title={index+1 + '. ' +data.eventname} bordered={true} onMouseOver={() => this.showevent(data,index)}>
                <p onMouseOver={() => this.showevent(data,index)} >Start Date: {data.start_time_display}</p>
                <p>End Date: {data.end_time_display}</p>
                <div >
                  <Button href = {'https://www.facebook.com/'+data.end_time_display}>Go to event</Button>
                </div>
                </Card>
            </div>
        )
    })}
    
    </div>
    )
    return (
      <div>
    <Row>
      <Col span={16}><Map data={this.state.data} curIndex={this.state.curIndex}/>
      </Col>
      <Col span={8}>
      <DatePick/>
      <br/>
      <Col span={1}/>
      <Col span={20}>
      <div className='box'>
      {card}
    
    </div>
      </Col>
      </Col>
      
    </Row>
    
  </div>
              
     
    );
  }
}