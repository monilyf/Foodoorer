import React,{Component} from 'react';
import {Text} from 'react-native';
import Color from '../../../utils/Color';
import Theme from '../../../utils/ThemeUtils';
import PropTypes from 'prop-types';

const Label = (props) => {

    onClick = () => {
        if (props.onPress)
            props.onPress();
    };

    
        let stylesArray = [];
        if (props.xxlarge)
            stylesArray.push({ fontSize: Theme.fontXXLarge });
        else if (props.xlarge)
            stylesArray.push({ fontSize: Theme.fontXLarge });
        else if (props.large)
            stylesArray.push({ fontSize: Theme.fontLarge });
        else if (props.normal)
            stylesArray.push({ fontSize: Theme.fontNormal });
        else if (props.small)
            stylesArray.push({ fontSize: Theme.fontSmall });
        else if (props.xsmall)
            stylesArray.push({ fontSize: Theme.fontXSmall });
        else
            stylesArray.push({ fontSize: Theme.fontNormal });

        if (props.bold)
            stylesArray.push({ fontWeight: "500" });
        else if (props.bolder)
            stylesArray.push({ fontWeight: "bold" });
        else if (props.light)
            stylesArray.push({ fontWeight: "400" });
        else if (props.lighter)
            stylesArray.push({ fontWeight: "200" });
        else
            stylesArray.push({ fontWeight: "normal" });

        if (props.roboto_medium)
            stylesArray.push({ fontFamily: "Roboto-Medium" });
        else if (props.roboto_regular)
            stylesArray.push({ fontFamily: "Roboto-Regular" });
        else
            stylesArray.push({ fontFamily: "Roboto-Regular" });

        stylesArray.push({
            color: props.color,
            marginTop: props.mt,
            marginBottom: props.mb,
            marginStart: props.ms,
            marginEnd: props.me,
            paddingHorizontal: props.ph,
            paddingVertical: props.pv,
            paddingBottom:props.pb,
            textAlign: props.align,
            borderBottomWidth:props.border,
            borderBottomColor:props.borderColor,
            letterSpacing:props.letterSpacing
        });
        stylesArray.push(props.style);
        return (
            <Text numberOfLines={props.singleLine ? 1 : null} style={stylesArray}
                onPress={props.onPress ? onClick : null}>
                {props.children}
            </Text>
        );
    }


Label.defaultProps = {
    xsmall: false,
    small: false,
    normal: false,
    large: false,
    xlarge: false,
    xxlarge: false,
    bold: false,
    bolder: false,
    lighter: false,
    light: false,
    color: Color.PRIMARY_DARK,
    roboto_regular: false,
    roboto_medium: false,
    align: "left",
    mt: 0,
    mb: 0,
    ms: 0,
    me: 0,
    ph:0,
    pv:0,
    pb:0,
    singleLine: false,
    border:0,
    borderColor:Color.PRIMARY_DARK,
    letterSpacing:0
};
Label.propTypes = {
    xsmall: PropTypes.bool,
    small: PropTypes.bool,
    normal: PropTypes.bool,
    large: PropTypes.bool,
    xlarge: PropTypes.bool,
    xxlarge: PropTypes.bool,
    bold: PropTypes.bool,
    bolder: PropTypes.bool,
    light: PropTypes.bool,
    lighter: PropTypes.bool,
    color: PropTypes.string,
    roboto_medium: PropTypes.bool,
    roboto_regular: PropTypes.bool,
    mt: PropTypes.number,
    mb: PropTypes.number,
    ms: PropTypes.number,
    me: PropTypes.number,
    ph: PropTypes.number,
    pv: PropTypes.number,
    pb: PropTypes.number,
    align: PropTypes.string,
    singleLine: PropTypes.bool,
    border:PropTypes.number,
    borderColor:PropTypes.string,
    letterSpacing:PropTypes.number
};
export default Label;