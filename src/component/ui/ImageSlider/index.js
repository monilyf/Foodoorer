import React, {Component} from 'react';
import {View} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import Color from '../../../utils/Color';

const ImageSlider = (props) => {
 
  
    return (
      <View>
        <SliderBox
          images={props.images}
          sliderBoxHeight={200}
          resizeMethod={'resize'}
          resizeMode={'cover'}
          dotColor={Color.PRIMARY}
          inactiveDotColor={Color.WHITE}
          imageLoadingColor={Color.PRIMARY}
          paginationBoxVerticalPadding={10}
          autoplays
          circleLoop
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            bottom:30,
          }}
        />
      </View>
      
    );
  
}

export default ImageSlider;
