import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as CdkVitestTemplate from '../lib/cdk-vitest-template-stack';
import { test, expect } from 'vitest';

// example test. To run these tests, uncomment this file along with the
// example resource in lib/cdk-vitest-template-stack.ts
test('SQS Queue Created', () => {
  const app = new cdk.App();
  // WHEN
  const stack = new CdkVitestTemplate.CdkVitestTemplateStack(app, 'MyTestStack');
  // THEN
  const template = Template.fromStack(stack);

  // 生成したテンプレートとスナップショットが同じか検証
  expect(template).toMatchSnapshot();
});
