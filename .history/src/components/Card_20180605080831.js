import React, { Component } from "react";
import {
  Card as CardStyled,
  CardTitle,
  CardContent,
  CardAction
} from "../styled/Card";
import { OutlineButton } from "../styled/Button";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <CardStyled>
        <CardTitle>
          <h3>Titre de ma Card </h3>
        </CardTitle>
        <CardContent>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo
            a est ut ornare. Etiam vitae egestas arcu. Integer dapibus mauris
            condimentum, imperdiet magna id, fermentum lacus. Etiam semper orci
            eros, sit amet hendrerit turpis malesuada vitae. Cras a varius
            justo. Praesent at tincidunt purus, eget bibendum dui. Morbi commodo
            justo ac elit sollicitudin, non consequat eros posuere. Maecenas
            efficitur, sem ac convallis consectetur, est quam mollis purus, eget
            aliquet nulla quam nec ante. Proin mauris nisl, ullamcorper vitae
            dolor quis, eleifend lobortis lorem. Fusce non quam sed nisl
            fringilla cursus. Aenean viverra ut erat vel iaculis. Sed eu dui
            libero. Nulla eget tellus eros. Duis venenatis lectus vitae turpis
            porta placerat.
          </p>
          <p>
            Mauris eu orci vel nisi commodo semper. Quisque aliquet neque quis
            ex facilisis, a aliquam urna commodo. Quisque turpis lacus, ultrices
            dignissim arcu id, feugiat aliquam metus. Morbi varius varius augue
            maximus lobortis. Nunc euismod diam a semper lobortis. Fusce id
            consectetur erat. Ut sit amet est vel mauris malesuada luctus. Duis
            ipsum lacus, pulvinar id fringilla at, faucibus eu massa. Nulla
            ultrices luctus est, at placerat neque placerat placerat. Curabitur
            id nunc quam. Nunc a egestas lorem. Curabitur at dignissim quam.
          </p>
        </CardContent>
        <CardAction>
          <OutlineButton>Cliquez ici</OutlineButton>
        </CardAction>
      </CardStyled>
    );
  }
}

export default Card;
