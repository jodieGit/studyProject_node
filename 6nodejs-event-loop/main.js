/**
 *
 * Created by wzwang on 2016/9/1.
 */
//    ����eventsģ��
var events = require('events');

//����eventEmitter����
var eventEmitter = new events.EventEmitter();

//�����¼��������
var connectHandler = function connected() {
    console.log("���ӳɹ�")

//    ����data_received�¼�
    eventEmitter.emit('data_received');
}

//��connection�¼��������
eventEmitter.on("connection", connectHandler);

//ʹ������������data_receiced�¼�
eventEmitter.on("data_received", function() {
    console.log("���ݽ��ճɹ�");
});

//����connection�¼�
eventEmitter.emit("connection");

console.log("����ִ�н���");

