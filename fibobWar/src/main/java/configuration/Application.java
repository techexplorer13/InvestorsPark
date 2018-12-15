package configuration;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackageClasses = HomeController.class)
public class Application extends SpringBootServletInitializer {
 
    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(Application.class);
    }
 
    public static void main(String[] args) {
    	System.setProperty("server.servlet.context-path", "/fibobWar");
    	System.setProperty("server.context-path", "/fibobWar");
        SpringApplication.run(Application.class, args);
    }
}