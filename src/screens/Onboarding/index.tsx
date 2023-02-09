import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper';
import ButtonIcon from '../../components/ButtonIcon';
import About from './About';
import AboutApp from './AboutApp';
import Welcome from './Welcome';
import IconArrowRight from '../../assets/icon-arrowRight.svg';
import IconArrowLeft from '../../assets/icon-arrowLeft.svg';

export default function Onboarding() {
  const swiperReference = React.createRef<Swiper>();

  return (
    <Swiper
      loop={false}
      ref={swiperReference}
      scrollEnabled={true}
      autoplay={false}
      showsButtons={true}
      buttonWrapperStyle={styles.buttonWrapper}
      nextButton={
        <ButtonIcon
          icon={<IconArrowRight fill="#F8F9FA" width={15} height={20} />}
          color="Blue"
          format="square"
          onPress={() => swiperReference.current?.scrollBy(+1)}
        />
      }
      prevButton={
        <ButtonIcon
          icon={<IconArrowLeft fill="#F8F9FA" width={15} height={20} />}
          color="Blue"
          format="square"
          onPress={() => swiperReference.current?.scrollBy(-1)}
        />
      }
      paginationStyle={[styles.pagination]}>
      <View style={{flex: 1, backgroundColor: 'red'}}>
        <About />
      </View>

      <View style={{flex: 1}}>
        <AboutApp />
      </View>

      <View style={{flex: 1}}>
        <Welcome />
      </View>
    </Swiper>
  );
}

const styles = StyleSheet.create({
  buttonWrapper: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    position: 'absolute',
    top: 340,
    left: 0,
    flex: 1,
    paddingHorizontal: 32,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pagination: {
    bottom: 55,
    left: 0,
    right: 0,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
});
