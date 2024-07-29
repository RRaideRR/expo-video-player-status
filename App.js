import { useVideoPlayer, VideoView } from 'expo-video';
import { useEffect, useState } from 'react';
import { View, Button, Text } from 'react-native';

const videoSource =
  'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4';

export default function App() {
  const player = useVideoPlayer(videoSource, (player1) => {
    player1.muted = true;
    player1.loop = true;
    player1.play();
  });

  const [shouldVideoViewMount, setShouldVideoViewMount] = useState(false);
  const [playerStatus, setPlayerStatus] = useState(undefined);

  useEffect(() => {
    const subscription = player.addListener('statusChange', status => {
      setPlayerStatus(status)
    });

    return () => {
      subscription.remove();
    };
  }, [player]);

  return (
    <View style={{flex: 1}}>
      <View style={{ height: 400, width: 300, borderColor: 'black', borderWidth: 1}}>
        {shouldVideoViewMount ?
          <VideoView
          player={player}
          contentFit="cover"
          style={{width: '100%', height: '100%'}}
          nativeControls={false}
          /> :
          null
        }
      </View>

      <Text>Player Status: {playerStatus}</Text>
      <Button title={!shouldVideoViewMount ? 'Mount' : 'Unmount'} onPress={() => setShouldVideoViewMount(!shouldVideoViewMount)} />
    </View>
  );
}
