import React from 'react';
import DatePick from '../../component/JSON/Date';
import Map from '../../component/Map/Map';
import { Container, Row, Col, Select, Card , Button, Tag} from 'antd';
import '../../App.css';
import axios from 'axios';
const Option = Select.Option;

export default class test extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data : [],
      dataCount : 0,
      page : 0,
      currentEvent: {},
      
    }
  }
  async componentDidMount() {
    try {
      while(this.state.page === 0 || this.state.dataCount === 100 ){
      const fet = await axios.post('https://api.allevents.in/events/list/?city=Chiang Mai&state=CM&country=Thailand&page='+this.state.page, {},
         { headers: {'Ocp-Apim-Subscription-Key': '6a81714eadb44aadbd559560c0e97dc5' }})
         console.log(fet.data.data.categories);
         this.setState({
           page : this.state.page + 1,
           data : [...this.state.data,...fet.data.data],
           dataCount : fet.data.count
         })
         fet.data.data.map( data => {
           return(
             <div></div>
           )
         })
        }  
       }catch(err){
        console.log(err);
       }
      }

showevent = (event) =>{
  this.setState({
    currentEvent : event
  })
}

  render() {
    const events = this.state.data;
    let card = null;
    let currentEvent = this.state.currentEvent;
    card = (
    <div className='box'>
      {events.map((event, index) => {
        return (
            <div>
                <Card title={index+1 + '. ' +event.eventname} bordered={true} onMouseOver={(event) => this.showevent(event)}>
                <p>Start Date: {event.start_time_display}</p>
                <p>End Date: {event.end_time_display}</p>
                {event.categories.map(category => {
                  <Tag> {category} </Tag>
                })}
                <div >
                  <Button> Go to event </Button>
                </div>
                </Card>
            <br/>
            </div>
        )
    })}
    
    </div>
    )
    
    
    
    return (
      <div>
    <Row>
      <Col span={16}><Map data={this.state.data}/>
      </Col>
      <Col span={8}>
      <DatePick/>
      <br/>
      <Col span={1}/>
      <Col span={20}>
      <h1>{this.state.currentEvent.eventname}</h1>
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