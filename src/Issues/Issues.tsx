import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { GET_REPOSITORS_ISSUES } from "../GraphQl/querys";
import { useQuery } from "@apollo/client";
import { Button } from "@mantine/core";

export const Issues = () => {
  const navigatation = useNavigate();
  const location = useLocation();
  const [issues, setIssues] = useState<string[]>([]);
  const {loading, error, data} = useQuery(GET_REPOSITORS_ISSUES, {
    variables: {
      owner: location.state.repositoryName.split('/')[0],
      name: location.state.repositoryName.split('/')[1],
    }
  });

  useEffect(() => {
    if (loading) console.log('loading...');
    if (error) console.log('error : ', error.message);
    if (data) {
      setIssues(data.repository.issues.nodes.map((node: any) => node.title));
    }
  }, [data]);

  return (
    <div>
      <Button variant="outline" onClick={() => navigatation(-1)}>Back</Button>
      <h3>{location.state.repositoryName}</h3>
      {loading && <p>Loading...</p>}
      <ul>
        {issues && 
          issues.map((issue, index) => (
            <li key={index}>{issue}</li>
          ))
        }
      </ul>
    </div>
  )
}