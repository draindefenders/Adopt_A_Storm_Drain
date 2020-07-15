//package com.adoptastormdrain.Map.services;
//
//import com.adoptastormdrain.Map.crud.entities.AasdUserDetails;
//import com.adoptastormdrain.Map.crud.entities.User;
//import com.adoptastormdrain.Map.crud.repository.UserRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Service;
//
//import java.util.Optional;
//
//@Service
//public class AasdUserDetailsService implements UserDetailsService {
//
//    @Autowired
//    UserRepository userRepository;
//
//    @Override
//    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException{
//        Optional<User> user = userRepository.findByUserName(userName);
//
//        user.orElseThrow(() -> new UsernameNotFoundException("Not found " + userName));
//
//        return user.map(AasdUserDetails::new).get();
//    }
//
//}
