import React from 'react';
import AddAthlete from "./screens/add_athlete";
import ListAthlete from "./screens/list_athlete";
import {useParams} from "react-router-dom";
function Club() {
  const {type} = useParams();

  return (
      <div>
        {
          type === 'add'?
              <AddAthlete/>
              :type === 'list'?
                  <ListAthlete/>
                  :<ListAthlete/>
        }
      </div>
  );
}

export default Club;
