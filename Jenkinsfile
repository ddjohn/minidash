pipeline {
    agent any
	
    environment {
	ANDROID_HOME = '/var/lib/jenkins/Android/Sdk' 
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
		sh "meteor update"
		sh "meteor npm update"
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
		sh "meteor test"
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
