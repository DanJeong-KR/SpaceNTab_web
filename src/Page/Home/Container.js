import React, { Component } from "react";
import { connect } from "react-redux";
import { injectIntl } from "react-intl";
import View from "./View";

class Container extends Component {
    constructor(props) {
      super(props);

      this.state= {
        lang: localStorage.getItem("lang")
      }
    }

    onClickLang = langKey => {
      const {lang} = this.state
      if (lang === langKey) return
      this.setState({
        lang: langKey
      }, () => {
        localStorage.setItem("lang", langKey);
    window.location.reload();
      })
    }
  
    render() {
      const {lang} = this.state
      return (
        <View intl={this.props.intl} lang={lang} onClickLang={this.onClickLang}
        />
      );
    }
  }
  
  export default connect(
    state => ({
      default: state.default
    }),
    {}
  )(injectIntl(Container));
  