import * as amqp from "amqplib";

class RabbitMQService {
  private channel?: amqp.Channel;

  constructor() {
    this.connectToRabbitMQ();
  }

  private async connectToRabbitMQ(): Promise<void> {
    const connection = await amqp.connect("amqp://localhost");
    this.channel = await connection.createChannel();
  }

  public async publishTask(task: string): Promise<void> {
    if (this.channel) {
      this.channel.assertQueue("tasks", { durable: false });
      this.channel.sendToQueue("tasks", Buffer.from(task));
    } else {
      console.error("RabbitMQ channel is not initialized");
    }
  }
}

export default RabbitMQService;
