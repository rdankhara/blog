import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { BlogContext } from '../contexts/BlogContext';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { Feather} from '@expo/vector-icons';

const IndexScreen = ({navigation}) => {
    const {data, deleteBlogPost, getBlogPosts} = useContext(BlogContext);
    useEffect(() => {
        getBlogPosts();
    },[]);

    return <View>
        <FlatList data={data} 
            keyExtractor={bp => bp.title}
            renderItem={({item: {title, id}}) => {
            return(
                <TouchableOpacity onPress={()=> navigation.navigate('Show', {id})}>
                    <View style={styles.row}>
                        <Text style={styles.title}>{title}-{id}</Text>
                        <TouchableOpacity onPress={() => deleteBlogPost(id)}>
                            <Feather style={styles.icon} name="trash" />
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
                )
            }}
        >
        </FlatList>
    </View>
}

IndexScreen.navigationOptions = ({navigation}) => { 
    return {
        title: 'Blog List',
        headerRight: <TouchableOpacity onPress={()=> navigation.navigate('Create')}>
            <Feather name='plus' size={30} />
            </TouchableOpacity>
    }
}
const styles = StyleSheet.create({
    row: { 
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 5,
        borderTopWidth: 1,
        borderColor: 'gray'
    },
    title: { 
        fontSize: 18
    },
    icon: { 
        fontSize: 24
    }
})

export { IndexScreen }