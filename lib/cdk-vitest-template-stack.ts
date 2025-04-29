import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import path = require('path');

export class CdkVitestTemplateStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const myFunction = new NodejsFunction(this, "HelloWorldFunction", {
      entry: path.join(__dirname, "../src/lambda/index.ts"),
      handler: "handler",
      runtime: lambda.Runtime.NODEJS_22_X,
    });
  }
}
