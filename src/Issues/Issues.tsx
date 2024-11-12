import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { GET_REPOSITORS_ISSUES } from "../GraphQl/querys";
import { useQuery } from "@apollo/client";
import { Button, Container, Flex, NavLink, Title, Text } from "@mantine/core";

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
    <Container>
      <Flex
        my={'xl'}
        direction={'column'}
        justify={'center'}
        align={'flex-start'}
      >
        <Button color="gray" variant="outline" onClick={() => navigatation(-1)}>Back</Button>
        <Title order={3} my={'lg'} ><Text span>Issues on </Text>{location.state.repositoryName}</Title>
        {loading && <p>Loading...</p>}
        {issues &&
          issues.map((issue, index) => (
            <NavLink key={index} label={issue} />
          ))
        }
      </Flex>
    </Container>  
  )
}