import { useVideoPlayer, VideoView } from 'expo-video';
import { useRef, useState } from 'react';
import {  StyleSheet, View, Button } from 'react-native';

const videoSource =
  'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_30MB.mp4';

export default function App() {
  const ref = useRef(null);
  const player = useVideoPlayer(videoSource, (player) => {
    player.loop = true;
    player.play();
  });

  return (
    <View style={styles.contentContainer}>
      <VideoView
      ref={ref}
      style={styles.video}
      player={player}
      contentFit="fill"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 50,
  },
  video: {
    width: 350,
    height: 275,
    backgroundColor: 'yellow',
  },
  controlsContainer: {
    padding: 10,
  },
});
