package pedroleonez.authentication_backend.config;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import pedroleonez.authentication_backend.dtos.ErrorDto;
import pedroleonez.authentication_backend.exceptions.AppException;

@ControllerAdvice
public class RestExceptionHandler {

    @ExceptionHandler(value = { AppException.class })
    @ResponseBody
    public ResponseEntity<ErrorDto> handlerException(AppException ex) {
        return ResponseEntity.status(ex.getHttpStatus())
                .body(new ErrorDto(ex.getMessage()));
    }
}
