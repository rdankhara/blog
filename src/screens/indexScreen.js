import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { BlogContext } from '../contexts/BlogContext';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { Feather} from '@expo/vector-icons';

const IndexScreen = ({navigation}) => {
    const {data, addBlogPost, deleteBlogPost} = useContext(BlogContext);
    return <View>
        <Button title="Add Blog" onPress={addBlogPost}></Button>
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