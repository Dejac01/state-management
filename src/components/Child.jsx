import React from 'react'
import Grandchild from './Grandchild'

    const Child = ({ cheese }) => {
        return (
          <div className="child">
            <GrandChild data={cheese} />
          </div>
        );
      };

export default Child