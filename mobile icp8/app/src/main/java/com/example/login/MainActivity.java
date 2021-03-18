package com.example.login;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.Toast;
import android.widget.Button;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Button btn = (Button) findViewById(R.id.login_btn);
        btn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                login();
            }
        });
    }

    public void login(){
        EditText usernameTextbox = (EditText) findViewById(R.id.username);
        EditText passwordTextbox = (EditText) findViewById(R.id.password);

        String username = usernameTextbox.getText().toString();
        String password = passwordTextbox.getText().toString();

        boolean validate = false;

        if(username != "" && password != ""){
            if(username.equals("Haritha") && password.equals("haritha")) {
                validate = true;
            }
        }

        if(!validate){
            Toast t= Toast.makeText(getApplicationContext(),"Enter valid credentials",Toast.LENGTH_SHORT);
        }
        else{
        //    Intent redirect = new Intent(MainActivity.this,HomeActivity.class);
        //    startActivity(redirect);
        }
    }


}