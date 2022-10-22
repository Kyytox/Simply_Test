# Import flask and datetime module for showing date and time
from flask import Flask, redirect, url_for
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
import time
  
# Initializing flask app
app = Flask(__name__)



# Route for call Selenium
@app.route('/sel')
def get_selenium():
    
    driver = webdriver.Chrome("chromedriver.exe")
    driver.get("http://localhost:1223/")
    time.sleep(5)
    driver.close()

    return ("launch Selenium")



# Running app
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80)
    app.run(debug=True)