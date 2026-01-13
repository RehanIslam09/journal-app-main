'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { collectionSchema } from '@/app/lib/schemas';
import { BarLoader } from 'react-spinners';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';

const CollectionForm = ({ onSuccess, loading, open, setOpen }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(collectionSchema),
    defaultValues: {
      name: '',
      description: '',
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    onSuccess(data);
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="bg-white/90 backdrop-blur-sm border border-neutral-200 rounded-2xl shadow-xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-neutral-900">
            Create New Collection
          </DialogTitle>
        </DialogHeader>

        {loading && (
          <BarLoader
            className="mb-4"
            width="100%"
            color="rgba(225, 29, 72, 0.6)" // rose, soft & dreamy
          />
        )}

        <form onSubmit={onSubmit} className="space-y-6">
          {/* Name */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-neutral-700">
              Collection Name
            </label>
            <Input
              {...register('name')}
              placeholder="Enter collection name…"
              className={`bg-white/80 ${
                errors.name ? 'border-red-400' : 'border-neutral-300'
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-neutral-700">
              Description (optional)
            </label>
            <Textarea
              {...register('description')}
              placeholder="Describe your collection…"
              className={`bg-white/80 ${
                errors.description ? 'border-red-400' : 'border-neutral-300'
              }`}
            />
            {errors.description && (
              <p className="text-red-500 text-sm">
                {errors.description.message}
              </p>
            )}
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-4 pt-2">
            <Button
              type="button"
              variant="ghost"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>

            <Button type="submit" variant="journal">
              Create Collection
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CollectionForm;
