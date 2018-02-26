import * as React from 'react';
import Stateless from 'wasabi-ui/lib/Stateless';
import { 
  Dropdown as DropDown,
  DropdownTrigger,
  DropdownContent,
  DropdownMenu,
  DropdownItem,
  DropdownDivider,
 } from 'rebul/lib/components/dropdown';
 import { Button } from 'rebul/lib/elements/button';
 import { Icon } from 'rebul/lib/elements/icon';

import Page from '../Page';
import Snippet from '../../components/snippet';

export default class Dropdown extends Stateless<{}> {
  public render(): JSX.Element {
    return (
      <Page 
        title="Dropdown"
        subTitle="An interactive dropdown menu for discoverable content"
        hasMeta
        variables
      >
        <Snippet slices borderless>
          <DropDown>
            <DropdownTrigger>
              <Button tagName="button">
                <span>Dropdown button</span>
                <Icon icon="angle-down"/>
              </Button>
            </DropdownTrigger>
            <DropdownMenu>
              <DropdownContent>
                <DropdownItem>Dropdown item </DropdownItem>
                <DropdownItem>Other dropdown item </DropdownItem>
                <DropdownItem isActive>Active dropdown item </DropdownItem>
                <DropdownItem>Other dropdown item</DropdownItem>
                <DropdownDivider/>
                <DropdownItem>With a divider</DropdownItem>
              </DropdownContent>
            </DropdownMenu>
          </DropDown>
        </Snippet>
        <h3><b><a>#</a> Dropdown content</b></h3>
        <span>
          While the DropdownItem can be used as an anchor link <code>a</code>,
          you can also use a <code>div</code> and insert almost any type of content.
        </span>
        <Snippet slices borderless>
          <DropDown>
            <DropdownTrigger>
              <Button tagName="button">
                <span>Content</span>
                <Icon icon="angle-down"/>
              </Button>
            </DropdownTrigger>
            <DropdownMenu>
              <DropdownContent>
                <DropdownItem tagName="div">
                  <p>You can insert <strong>any type of content</strong> within the dropdown menu.</p>  
                </DropdownItem>
                <DropdownDivider/>
                <DropdownItem tagName="div">
                  <p>You simply need to use a <code>&lt;div&gt;</code> instead.</p>
                </DropdownItem>
                <DropdownDivider/>
                <DropdownItem> This is a link </DropdownItem>
              </DropdownContent>
            </DropdownMenu>
          </DropDown>
        </Snippet>
        <h3><b><a>#</a>Hoverable or Toggable</b></h3>
        <div>
          <p>
            The <code>Dropdown</code> component has <strong>2 additional modifiers</strong>
          </p>
          <ul>
            <li>
              <code>isHoverable</code>: the dropdown will show up when <strong>hovering</strong> the <code>DropdownTrigger</code>
            </li>
            <li>
              <code>isActive</code>: the dropdown will show up <strong>all the time</strong>
            </li>
          </ul>
        </div>
        <Snippet slices borderless>
          <div>
            <DropDown>
              <DropdownTrigger>
                <Button tagName="button">
                  <span>Click me</span>
                  <Icon icon="angle-down"/>
                </Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownContent>
                  <DropdownItem >Overview</DropdownItem>
                  <DropdownItem >Modifiers</DropdownItem>
                  <DropdownItem >Grid</DropdownItem>
                  <DropdownItem >Form</DropdownItem>
                  <DropdownItem >Elements</DropdownItem>
                  <DropdownItem >Components</DropdownItem>
                  <DropdownItem >Layout</DropdownItem>
                  <DropdownDivider/>
                  <DropdownItem >More</DropdownItem>
                </DropdownContent>
              </DropdownMenu>
            </DropDown>
            <DropDown isHoverable>
              <DropdownTrigger>
                <Button tagName="button">
                  <span>Hover me</span>
                  <Icon icon="angle-down"/>
                </Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownContent>
                  <DropdownItem tagName="div">
                    <p>You can insert <strong>any type of content</strong> within the dropdown menu.</p>
                  </DropdownItem>
                </DropdownContent>
              </DropdownMenu>
            </DropDown>
          </div>
        </Snippet>
        <h3><b><a>#</a>Right aligned</b></h3>
        <div>
          <p>
            You can add the <code>isRight</code> modifier to have a <strong>right-aligned</strong> dropdown.
          </p>
        </div>
        <Snippet slices borderless>
          <DropDown isRight>
            <DropdownTrigger>
              <Button tagName="button">
                <span>Right aligned</span>
                <Icon icon="angle-down"/>
              </Button>
            </DropdownTrigger>
            <DropdownMenu>
              <DropdownContent>
                <DropdownItem tagName="div">
                  <p>Add the <code>is-right</code> modifier for a <strong>right-aligned</strong> dropdown.</p>
                </DropdownItem>
              </DropdownContent>
            </DropdownMenu>
          </DropDown>
        </Snippet>
        <h3><b><a>#</a>Dropup</b></h3>
        <div>
          <p>
            You can add the <code>isUp</code> modifier to have a dropdown menu that appears above the dropdown button.
          </p>
        </div>
        <Snippet slices borderless>
          <DropDown isUp>
            <DropdownTrigger>
              <Button tagName="button">
                <span>Dropup button</span>
                <Icon icon="angle-down"/>
              </Button>
            </DropdownTrigger>
            <DropdownMenu>
              <DropdownContent>
                <DropdownItem tagName="div">
                  <p>You can add the <code>isUp</code> modifier to have a dropdown menu that appears above the dropdown button.</p>
                </DropdownItem>
              </DropdownContent>
            </DropdownMenu>
          </DropDown>
        </Snippet>
      </Page>
    );
  }
}
