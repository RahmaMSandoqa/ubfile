import React from 'react';
import videolist = (props) => {
const videoItems = props.video.map((video)) =>{
     return (
         videoListItem
           Key={video.etag}
           Video={video} />
   );
});
 

return (
<ul ClassName="col-md-4 List-group">
    {videoItems}
</ul>
);
};

export default videoList;