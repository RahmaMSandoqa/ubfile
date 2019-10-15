import React,{ Component } from 'react';
import Search from 'search';
import YTSearch from 'youtube-api-search';
import Videolist from './components/video_list'
const API_KEY = 'AIzaSyDzi_DFdmtCngpxX-qSnoZRk9uwfVHnzvw';


class App extends  Component {
constructor(props){
  super(props);
  this.state = {
    videos:[]
  };
    this.videoSearch('React tutorials');
}
  videoSearch(term){
     YTSearch({key: API_KEY, term: term}, (data) => { 
       this.setState({
         videos: data
       });
     });
   }
  render() { 
    return ( 
      <div>
        youtube App
        <Search/>
      </div>
     );
  }
}
 
export default App;