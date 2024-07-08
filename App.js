import { useVideoPlayer, VideoView } from 'expo-video';
import { useRef, useEffect } from 'react';
import { StyleSheet, View, Button, useWindowDimensions } from 'react-native';

const videoSource =
  'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h265/1080/Big_Buck_Bunny_1080_10s_30MB.mp4';

const videoSource2 =
  'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h265/1080/Big_Buck_Bunny_1080_10s_30MB.mp4';

export default function App() {
  const player1 = useVideoPlayer(videoSource, (player1) => {
    player1.loop = true;
    player1.play();
  });

  const player2 = useVideoPlayer(videoSource2, (player2) => {
    player2.loop = true;
    player2.play();
  });

  return (
    <View style={{flex: 1}}>
      <VideoView
        player={player1}
        contentFit="cover"
        style={{width: '100%', height: '100%'}}
        nativeControls={false}
      />

      <VideoView
        player={player2}
        contentFit="contain"
        style={{width: 300, height: 200}}
        nativeControls={false}
      />
    </View>

  );
}
