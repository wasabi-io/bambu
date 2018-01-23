import * as React from 'react';
import Container from 'rebul/lib/elements/container/Container';
import SubTitle from 'rebul/lib/elements/title/SubTitle';
import Title from 'rebul/lib/elements/title/Title';
import Stateless from 'wasabi-ui/lib/Stateless';

export interface WorkspaceProps {
  name: string;
  path: string;
  description: string;
}

export default class Workspace extends Stateless<WorkspaceProps> {
  public render() {
    return (
      <Container>
        <Title>{this.props.name}</Title>
        <SubTitle>{this.props.description}</SubTitle>
        {this.props.children}
      </Container>
    );
  }
}
