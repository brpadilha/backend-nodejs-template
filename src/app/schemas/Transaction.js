import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },

  timestamps: {
    createdAt: 'created_at',
  },
});

export default mongoose.model('Schema', SchemaSchema);
