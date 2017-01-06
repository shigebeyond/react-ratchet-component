# react-ratchet-componnent
本项目基于react，封装了ratchet的组件。直接使用了另外的项目[react-ratchet](https://github.com/lzcmaro/react-ratchet)的代码

##React v0.1.4 support

##local setup

* install

`npm install react-ratchet-componnent`

* use

有以下的组件： Badge, Button, Card, Fade, Form, FormButton, Select, ActionSheet, Scroll, Icon, Input, Link, List, Media, Modal, NavBar, NavButton, NavPopover, Page, Portal, SegmentedControl, Slider, SliderItem, TabBar, Toggle, Transition

例子如下：

```
var {Badge} = require('react-ratchet-componnent');
var badgeInstance = (
  <div>
      <Badge>1</Badge>
      <Badge ratStyle="primary">2</Badge>
      <Badge ratStyle="positive">3</Badge>
      <Badge ratStyle="negative">4</Badge>
      
      <Badge inverted>1</Badge>
      <Badge ratStyle="primary" inverted>2</Badge>
      <Badge ratStyle="positive" inverted>3</Badge>
      <Badge ratStyle="negative" inverted>4</Badge>
  </div>
);

ReactDOM.render(badgeInstance, mountNode);
```
