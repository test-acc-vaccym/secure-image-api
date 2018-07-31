//
// Secure Image
//
// Copyright © 2018 Province of British Columbia
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// Created by Jason Leach on 2018-05-06.
//

'use strict';

const minio = jest.genMockFromModule('minio');

// function statObject(bucket, file, cb) {
//   const now = new Date();
//   if (file === 'expiredFile') {
//     now.setDate(now.getDate() + 1000);
//   }

//   return cb(undefined, {
//     size: 1000,
//     etag: 'abc123',
//     metaData: {},
//     lastModified: now,
//   });
// }

// function presignedGetObject(bucket, name, expiryInSeconds, cb) {
//   cb(undefined, 'http://localhost/foo/abc123');
// }

// function putObject(bucket, name, data, cb) {
//   cb(undefined, '123456789');
// }

// minio.Client.prototype.statObject = statObject;
// minio.Client.prototype.presignedGetObject = presignedGetObject;
// minio.Client.prototype.putObject = putObject;

module.exports = minio;
