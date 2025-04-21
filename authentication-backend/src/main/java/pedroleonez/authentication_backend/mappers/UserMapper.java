package pedroleonez.authentication_backend.mappers;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import pedroleonez.authentication_backend.dtos.SignUpDto;
import pedroleonez.authentication_backend.dtos.UserDto;
import pedroleonez.authentication_backend.entities.User;

@Mapper(componentModel = "spring")
public interface UserMapper {

    UserDto toUserDto(User user);

    @Mapping(target = "password", ignore = true)
    User signUpToUser(SignUpDto signUpDto);
}
