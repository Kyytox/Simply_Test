# Import flask and datetime module for showing date and time
from flask import Flask, redirect, url_for, request
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
import time
  
# Initializing flask app
app = Flask(__name__)

@app.route('/')
def hello():
    return 'Hello'

# Route for call Selenium
@app.route('/sel', methods=['POST'])
def get_selenium():
    
    print('test-----')
    arrActions = request.get_json('body')['list']
    urlDriver = request.get_json('body')['url']

    driver = webdriver.Chrome("chromedriver.exe")
    driver.set_window_size(1700, 1080)
    driver.get(urlDriver)
    time.sleep(3)
    
    for x in arrActions: 
        typeAction = x.get('typeAction')
        textInput = x.get('input')
        typeElement = x.get('typeElement')
        nameElement = x.get('nameElement')
        waitTime = 1 if x.get('timeWaitAction') == None else int(x.get('timeWaitAction')) 


        match typeAction: 
            case "click":
                match typeElement:
                    case "ID":
                        driver.find_element(By.ID, nameElement).click()
                    case "CLASS_NAME":
                        driver.find_element(By.CLASS_NAME, nameElement).click()
                    case "NAME":
                        driver.find_element(By.NAME, nameElement).click()
                    case "TAG_NAME":
                        driver.find_element(By.TAG_NAME, nameElement).click()
                    case "LINK_TEXT":
                        driver.find_element(By.LINK_TEXT, nameElement).click()
            case "input":
                match typeElement:
                    case "ID":
                        element = driver.find_element(By.ID, nameElement)
                        element.send_keys(textInput)
                    case "CLASS_NAME":
                        element = driver.find_element(By.CLASS_NAME, nameElement)
                        element.send_keys(textInput)
                    case "NAME":
                        element = driver.find_element(By.NAME, nameElement)
                        element.send_keys(textInput)
                    case "TAG_NAME":
                        element = driver.find_element(By.TAG_NAME, nameElement)
                        element.send_keys(textInput)
                    case "LINK_TEXT":
                        element = driver.find_element(By.LINK_TEXT, nameElement)   
                        element.send_keys(textInput)  
            case "navBack":
                driver.back()
            case "navForw":
                driver.forward()
        
        time.sleep(waitTime)
    
    
    driver.close()

    return ("launch Selenium")



# Running app
if __name__ == '__main__':
    # app.run(host='0.0.0.0', port=8002)
    app.run(debug=True)