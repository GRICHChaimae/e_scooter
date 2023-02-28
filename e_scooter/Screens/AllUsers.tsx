import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';

export default function AllUsers() {
    const [users, setUsers] = useState<User[]>([]);
    interface User {
        id: number;
        firstNmae: string;
        secondName: string;
    }
    useEffect(() => {
        allUsers();
    }, []);
    const allUsers = async () => {
        try {
          const res = await axios.get("http://10.0.2.2:3000/api/v1/user/allUsers");
          setUsers(res.data);
        } catch (error) {
          console.log(error)
        }
    }

    const [searchText, setSearchText] = useState('');
    const filteredCards = users.filter(card => 
        card.firstNmae.toLowerCase().includes(searchText.toLowerCase()) ||
        card.secondName.toLowerCase().includes(searchText.toLowerCase())
      );
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.searchBar}
                placeholder="Search"
                onChangeText={text => setSearchText(text)}
                value={searchText}
            />
            <FlatList
                data={filteredCards}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.card}>
                        <Text style={styles.title}>{item.firstNmae} {item.secondName}</Text>
                    </TouchableOpacity>
                )}
                key={item => item.id}
                contentContainerStyle={styles.cardList}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    searchBar: {
        height: 40,
        marginHorizontal: 10,
        marginTop: 10,
        borderRadius: 10,
        paddingHorizontal: 10,
        backgroundColor: '#f2f2f2',
    },
    cardList: {
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    card: {
        width: '90%',
        height: 'auto',
        marginHorizontal: '5%',
        marginVertical: 10,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: '#fff',
        elevation: 3,
    },
    image: {
        width: 150,
        height: 200 * 0.75,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
    },
});